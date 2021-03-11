import {Schema} from "mongoose"
import {DataAccess} from '../DataAccess'
import {IIngredientModel} from '../Interfaces/IIngredientModel'
import {AllergyType} from '../Enums/AllergyType'
//import { ObjectId } from "mongodb"

let mongooseConnection = DataAccess.mongooseConnection;

class IngredientModel{
    public static schema: any;
    public static model: any;


    public constructor() {
      IngredientModel.createSchema();
      IngredientModel.createModel();
    }
    
    public static createSchema(): void {
      if (this.schema) {
        return;
      }
      this.schema = new Schema(
        {
          ingredient_id: Number,
          name: String,
          unit: String,
          price: Number,
          restrictions: [
            {
              type: String,
              enum: AllergyType,
            }
            ]
        }, {collection: 'ingredients'}
      );
    }
    
    public static createModel(): void {
      if (this.model) {
        return;
      }
      this.model = mongooseConnection.model<IIngredientModel>("Ingredients", this.schema);
    }


    public static retrieveIngredientsForMealPlan(idlist: Number[], response: any): any { 
      console.log(idlist);
      let query = this.model.find({'ingredient_id':{$in: idlist}});
      query.exec((err, itemArray) => {
        response.json(itemArray);
      })
      
    }

    public static retrieveIngredientsWithFilter(response: any, filter: Object): any { 
      console.log(filter);
  
      let query = this.model.find(filter);
      query.exec( (err, item) => {
        response.json(item);
      });
    }
    // TO-DO: change ObjectId to String for foreign key
    public static retrieveIngredientByID(response: any, filter: Object): any {
        //let id = new ObjectId(filter);
        let query = this.model.findOne(filter);
        query.exec( (err, item) => {
            response.json(item);
        });
    }

      // TO-DO: allow finding names includeing keywords
    public static retrieveRecipeByName(response: any, filter: Object): any { 
        let query = this.model.find(filter);
        query.exec( (err, item) => {
            response.json(item);
        });
    }
}
IngredientModel.createSchema();
IngredientModel.createModel();
export {IngredientModel};

