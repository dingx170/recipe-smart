import  {Schema} from "mongoose"
import {DataAccess} from '../DataAccess'
import {MealType} from '../Enums/MealType'
import {CuisineType} from '../Enums/CuisineType'
import {FeatureType} from '../Enums/FeatureType'
import {AllergyType} from '../Enums/AllergyType'
import { IMealplanModel } from "../Interfaces/IMealplanModel"
import {CounterModel} from './CounterModel';

let mongooseConnection = DataAccess.mongooseConnection;

class MealplanModel {
    public schema: any;
    public model: any;

    public constructor() {
      this.createSchema();  
      this.createModel();
    }

    public createSchema(): void {
        this.schema = new Schema(
            {
                mealplan_id: {
                  type: Number,
                  unique: true,
                  required: true
                },
                member_id: Number,
                date: Date,
                budget: Number,
                group: Number,
                recipe_list: [{recipe_id: Number, quantity: Number}],
                shopping_list: [{name: String, unit: String, count: Number}],
                meal_type: [{
                    type: String,
                    enum: MealType,
                  }],
                cuisine_type: [{
                    type: String,
                    enum: CuisineType,
                  }],
                feature_type: [{
                    type: String,
                    enum: FeatureType,
                  }],
                restrictions: [
                    {
                      type: String,
                      enum: AllergyType,
                    }
                ]
            }, {collection: 'mealplans'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IMealplanModel>("Mealplans", this.schema);
    }

    public addNewMealPlan(response: any, body: any) {
        CounterModel.model.findOneAndUpdate({"name": "mealplan"}, {$inc: {'count': 1}}, {useFindAndModify: false}, (err, record) => {
          if (err){
            response.send(err);
            return;
          }
          
          body['mealplan_id'] = record.count + 1;
    
          this.model(body).save((err, mealplan) => {
            if (err) {
              response.send(err);
              return;
            }
            response.json(mealplan);
          });
          
        });
        
    }
    
    //TODO: ID data type need to be determined
    public retrieveAllMealplansByMemberId(response: any, filter: Object): any {
      console.log(filter)  
      let query = this.model.find(filter);
      query.exec((err, itemArray) => {
        response.json(itemArray);
      });
    }

    // Get shopping list of a mealplan
    public retrieveShoppinglistFromMealplan(response: any, filter: Object): any {
      let query = this.model.findOne(filter).select('shopping_list');
      console.log("query: " +query);
      query.exec((err, item) => {
        console.log(item);
        response.json(item);
      })
    }

    // Get recipe list of a mealplan
    public retrieveRecipelistFromMealplan(response: any, filter:Object): any {
      let query = this.model.findOne(filter).select('recipe_list');
      console.log(query);
      query.exec((err, item) => {
        console.log(item);
        response.json(item);
      })
    }

    public removeMealplan(response: any, filter: Object) {
      console.log(filter);
      this.model.findOneAndDelete(filter, {useFindAndModify: false}, (err, mealplan) =>{
        if (err){
          response.send(err);
          return;
        }
        response.json(mealplan.mealplan_id);
      });
    }

    public async findMealplanById(id: Number){
      return await this.model.findOne({mealplan_id: id});
    }

    

}
export{MealplanModel} 