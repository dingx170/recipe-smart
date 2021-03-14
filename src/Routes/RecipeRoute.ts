import {Router} from "express";
import {RecipeController} from '../Controllers/RecipeController';

class RecipeRoute {

    public static registerRoutes(recipeRoute: Router) {

        // 2. get requests and pass to controller
        recipeRoute.get("/api/recipes/:id", RecipeController.getRecipeByID);
        
        recipeRoute.get("/api/recipes", RecipeController.getRecipesByFilter);
    }
}

export {RecipeRoute}