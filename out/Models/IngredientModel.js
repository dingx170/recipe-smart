"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientModel = void 0;
const mongoose_1 = require("mongoose");
const DataAccess_1 = require("../DataAccess");
const AllergyType_1 = require("../Enums/AllergyType");
//import { ObjectId } from "mongodb"
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class IngredientModel {
    constructor() {
        IngredientModel.createSchema();
        IngredientModel.createModel();
    }
    static createSchema() {
        if (this.schema) {
            return;
        }
        this.schema = new mongoose_1.Schema({
            ingredient_id: Number,
            name: String,
            unit: String,
            price: Number,
            restrictions: [
                {
                    type: String,
                    enum: AllergyType_1.AllergyType,
                }
            ]
        }, { collection: 'ingredients' });
    }
    static createModel() {
        if (this.model) {
            return;
        }
        this.model = mongooseConnection.model("Ingredients", this.schema);
    }
    static retrieveIngredientsForMealPlan(idlist, response) {
        console.log(idlist);
        let query = this.model.find({ 'ingredient_id': { $in: idlist } });
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    static retrieveIngredientsWithFilter(response, filter) {
        console.log(filter);
        let query = this.model.find(filter);
        query.exec((err, item) => {
            response.json(item);
        });
    }
    // TO-DO: change ObjectId to String for foreign key
    static retrieveIngredientByID(response, filter) {
        //let id = new ObjectId(filter);
        let query = this.model.findOne(filter);
        query.exec((err, item) => {
            response.json(item);
        });
    }
    // TO-DO: allow finding names includeing keywords
    static retrieveRecipeByName(response, filter) {
        let query = this.model.find(filter);
        query.exec((err, item) => {
            response.json(item);
        });
    }
}
exports.IngredientModel = IngredientModel;
IngredientModel.createSchema();
IngredientModel.createModel();
