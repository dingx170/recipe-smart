"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const RecipeModel_1 = require("../Models/RecipeModel");
class RecipeController {
    /* General methods */
    static getRecipeByID(req, res) {
        // 3. analyze request and use model to modify db data
        let id = req.params.id;
        RecipeModel_1.RecipeModel.retrieveRecipeByID(res, { recipe_id: id });
        console.log("View one recipe by id");
    }
    static getRecipesByFilter(req, res) {
        let name = req.query.name;
        let cost = req.query.cost;
        let meal_types = req.query.meal_types;
        let cuisine_types = req.query.cuisine_types;
        let feature_types = req.query.feature_types;
        let restrictions = req.query.restrictions;
        var filter = {};
        if (name) {
            let regex = new RegExp(name, 'i');
            filter["name"] = { $regex: regex };
        }
        if (cost) {
            filter["cost"] = { $lt: cost };
        }
        if (meal_types) {
            filter["meal_type"] = { $in: meal_types }; // test with recipes?meal_types[]=Lunch&meal_types[]=Dinner
        }
        if (cuisine_types) {
            filter["cuisine_type"] = { $in: cuisine_types };
        }
        if (feature_types) {
            filter["feature_type"] = { $in: feature_types };
        }
        if (restrictions) {
            filter["restrictions"] = { $nin: restrictions };
        }
        RecipeModel_1.RecipeModel.retrieveRecipesWithFilter(res, filter);
        console.log("View recipes");
    }
    /* Member methods */
    static getRecipesByMemberID(req, res) {
        console.log("---------------MyRecipe------------------");
        console.log(req.user.id);
        let member_id = req.params.member_id;
        RecipeModel_1.RecipeModel.retrieveRecipesByMemberID(res, { member_id: member_id });
    }
    static postRecipeByMemberID(req, res) {
        let new_recipe = req.body;
        RecipeModel_1.RecipeModel.createRecipeByMemberID(res, new_recipe);
    }
    static putRecipe(req, res) {
        let new_recipe = req.body;
        let recipe_id = new_recipe.recipe_id;
        RecipeModel_1.RecipeModel.updateRecipe(res, { recipe_id: recipe_id }, new_recipe);
    }
    static deleteRecipe(req, res) {
        let recipe_id = req.params.recipe_id;
        RecipeModel_1.RecipeModel.removeRecipe(res, { recipe_id: recipe_id });
    }
}
exports.RecipeController = RecipeController;
