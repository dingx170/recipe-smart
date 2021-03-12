import {Router} from "express";
import {RecipeController} from '../Controllers/RecipeController';

class MyRecipeRoute {

    public static registerRoutes(recipeRoute: Router) {

        recipeRoute.get("/myrecipes/:member_id", RecipeController.getRecipesByMemberID);
        
        recipeRoute.post("/myrecipes/:member_id", RecipeController.postRecipeByMemberID);

        recipeRoute.put("/myrecipes/:member_id/:recipe_id", RecipeController.putRecipe);

        recipeRoute.delete("/myrecipes/:member_id/:recipe_id", RecipeController.deleteRecipe);
    }
}

export {MyRecipeRoute}