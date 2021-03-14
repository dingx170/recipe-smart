import {Router} from "express";
import {RecipeController} from '../Controllers/RecipeController';
import {Passport} from '../Passport/Passport';

class MyRecipeRoute {

    public static registerRoutes(recipeRoute: Router) {

        recipeRoute.get("/api/myrecipes/:member_id", Passport.validateAuth, RecipeController.getRecipesByMemberID);
        
        recipeRoute.post("/api/myrecipes/:member_id", RecipeController.postRecipeByMemberID);

        recipeRoute.put("/api/myrecipes/:member_id/:recipe_id", RecipeController.putRecipe);

        recipeRoute.delete("/api/myrecipes/:member_id/:recipe_id", RecipeController.deleteRecipe);
    }
}

export {MyRecipeRoute}