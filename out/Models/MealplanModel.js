"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealplanModel = void 0;
const mongoose_1 = require("mongoose");
const DataAccess_1 = require("../DataAccess");
const MealType_1 = require("../Enums/MealType");
const CuisineType_1 = require("../Enums/CuisineType");
const FeatureType_1 = require("../Enums/FeatureType");
const AllergyType_1 = require("../Enums/AllergyType");
const CounterModel_1 = require("./CounterModel");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class MealplanModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new mongoose_1.Schema({
            mealplan_id: {
                type: Number,
                unique: true,
                required: true
            },
            member_id: Number,
            date: Date,
            budget: Number,
            group: Number,
            recipe_list: [{ recipe_id: Number, quantity: Number }],
            shopping_list: [{ name: String, unit: String, count: Number }],
            meal_type: [{
                    type: String,
                    enum: MealType_1.MealType,
                }],
            cuisine_type: [{
                    type: String,
                    enum: CuisineType_1.CuisineType,
                }],
            feature_type: [{
                    type: String,
                    enum: FeatureType_1.FeatureType,
                }],
            restrictions: [
                {
                    type: String,
                    enum: AllergyType_1.AllergyType,
                }
            ]
        }, { collection: 'mealplans' });
    }
    createModel() {
        this.model = mongooseConnection.model("Mealplans", this.schema);
    }
    addNewMealPlan(response, body) {
        CounterModel_1.CounterModel.model.findOneAndUpdate({ "name": "mealplan" }, { $inc: { 'count': 1 } }, { useFindAndModify: false }, (err, record) => {
            if (err) {
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
    retrieveAllMealplansByMemberId(response, filter) {
        console.log(filter);
        let query = this.model.find(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    // Get shopping list of a mealplan
    retrieveShoppinglistFromMealplan(response, filter) {
        let query = this.model.findOne(filter).select('shopping_list');
        console.log("query: " + query);
        query.exec((err, item) => {
            console.log(item);
            response.json(item);
        });
    }
    // Get recipe list of a mealplan
    retrieveRecipelistFromMealplan(response, filter) {
        let query = this.model.findOne(filter).select('recipe_list');
        console.log(query);
        query.exec((err, item) => {
            console.log(item);
            response.json(item);
        });
    }
    removeMealplan(response, filter) {
        console.log(filter);
        this.model.findOneAndDelete(filter, { useFindAndModify: false }, (err, mealplan) => {
            if (err) {
                response.send(err);
                return;
            }
            response.json(mealplan.mealplan_id);
        });
    }
    findMealplanById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOne({ mealplan_id: id });
        });
    }
}
exports.MealplanModel = MealplanModel;
