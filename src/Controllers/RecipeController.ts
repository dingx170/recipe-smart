import {Request, Response} from "express";
import {RecipeModel} from '../Models/RecipeModel';
import {Passport} from '../Passport/Passport';

class RecipeController {

    /* General methods */

    public static getRecipeByID(req: Request, res: Response) {
        // 3. analyze request and use model to modify db data
        let id = req.params.id;

        RecipeModel.retrieveRecipeByID(res, {recipe_id: id});

        console.log("View one recipe by id");
    }

    public static getRecipesByFilter(req: Request, res: Response) {
        let name = req.query.name;
        let cost = req.query.cost;
        let meal_types = req.query.meal_types;
        let cuisine_types = req.query.cuisine_types;
        let feature_types = req.query.feature_types;
        let restrictions = req.query.restrictions;

        var filter = {};
        if (name) {
            let regex = new RegExp(name, 'i');
            filter["name"] = {$regex: regex};
        } 
        if (cost) {
            filter["cost"] = {$lt: cost};
        }
        if (meal_types) { 
            filter["meal_type"] = {$in: meal_types}; // test with recipes?meal_types[]=Lunch&meal_types[]=Dinner
        }
        if (cuisine_types) {
            filter["cuisine_type"] = {$in: cuisine_types}; 
        }
        if (feature_types) {
            filter["feature_type"] = {$in: feature_types}; 
        }
        if (restrictions) {
            filter["restrictions"] = {$nin: restrictions}; 
        }

        RecipeModel.retrieveRecipesWithFilter(res, filter);
        console.log("View recipes");
    }

    /* Member methods */

    public static getRecipesByMemberID(req: Request, res: Response) {
        console.log("---------------MyRecipe------------------");
        console.log(req.user.id);

        let member_id = req.params.member_id;

        RecipeModel.retrieveRecipesByMemberID(res, {member_id: member_id});
    }

    public static postRecipeByMemberID(req: Request, res: Response) {
        let new_recipe = req.body;

        RecipeModel.createRecipeByMemberID(res, new_recipe);
    }

    public static putRecipe(req: Request, res: Response) {
        let new_recipe = req.body;
        let recipe_id = new_recipe.recipe_id;

        RecipeModel.updateRecipe(res, {recipe_id : recipe_id}, new_recipe);
    }

    public static deleteRecipe(req: Request, res: Response) {
        let recipe_id = req.params.recipe_id;

        RecipeModel.removeRecipe(res, {recipe_id : recipe_id});
    }
}

export {RecipeController}