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
exports.RecipeModel = void 0;
const mongoose_1 = require("mongoose");
const DataAccess_1 = require("../DataAccess");
const MealType_1 = require("../Enums/MealType");
const CuisineType_1 = require("../Enums/CuisineType");
const FeatureType_1 = require("../Enums/FeatureType");
const AllergyType_1 = require("../Enums/AllergyType");
const RecipeTag_1 = require("../Enums/RecipeTag");
const CounterModel_1 = require("./CounterModel");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class RecipeModel {
    static createSchema() {
        if (this.schema) {
            return;
        }
        this.schema = new mongoose_1.Schema({
            recipe_id: Number,
            name: String,
            member_id: Number,
            date: Date,
            steps: [{ step: String }],
            ingredients: [{ name: String, unit: String, count: Number }],
            group: Number,
            cost: Number,
            unit_cost: Number,
            photo: String,
            likes: Number,
            meal_type: {
                type: String,
                enum: MealType_1.MealType,
            },
            cuisine_type: {
                type: String,
                enum: CuisineType_1.CuisineType,
            },
            feature_type: {
                type: String,
                enum: FeatureType_1.FeatureType,
            },
            restrictions: [
                {
                    type: String,
                    enum: AllergyType_1.AllergyType,
                }
            ],
            recipe_tags: [
                {
                    type: String,
                    enum: RecipeTag_1.RecipeTag,
                }
            ]
        }, { collection: 'recipes' });
    }
    static createModel() {
        if (this.model) {
            return;
        }
        this.model = mongooseConnection.model("Recipes", this.schema);
    }
    /* General methods */
    static retrieveRecipeByID(response, filter) {
        let query = this.model.findOne(filter);
        query.exec((err, item) => {
            response.json(item);
        });
    }
    static retrieveRecipesWithFilter(response, filter) {
        console.log(filter);
        let query = this.model.find(filter);
        query.exec((err, item) => {
            response.json(item);
        });
    }
    static retrieveRecipesForMealPlan(filter) {
        console.log(filter);
        let query = this.model.find(filter);
        query.exec().then((res) => {
            console.log(res);
            return res;
        });
    }
    static retrieveRecipeListByIdlist(recipeId_list, response) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find({ 'recipe_id': { $in: recipeId_list } });
        });
    }
    /* Member methods */
    static retrieveRecipesByMemberID(response, filter) {
        let query = this.model.find(filter);
        query.exec((err, item) => {
            response.json(item);
        });
    }
    static createRecipeByMemberID(response, new_recipe) {
        CounterModel_1.CounterModel.model.findOneAndUpdate({ "name": "recipe" }, { $inc: { 'count': 1 } }, { useFindAndModify: false }, (err, record) => {
            if (err) {
                response.send(err);
                return;
            }
            new_recipe.recipe_id = record.count + 1;
            this.model(new_recipe).save((err, new_recipe) => {
                if (err) {
                    response.send(err);
                    return;
                }
                response.json(new_recipe);
            });
        });
    }
    static updateRecipe(response, filter, new_recipe) {
        this.model.findOneAndUpdate(filter, new_recipe, { useFindAndModify: false }, (err, recipe) => {
            if (err) {
                response.send(err);
                return;
            }
            response.json(recipe);
        });
    }
    static removeRecipe(response, filter) {
        this.model.findOneAndDelete(filter, { useFindAndModify: false }, (err, recipe) => {
            if (err) {
                response.send(err);
                return;
            }
            response.json(recipe);
        });
    }
}
exports.RecipeModel = RecipeModel;
RecipeModel.createSchema();
RecipeModel.createModel();
