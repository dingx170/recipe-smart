import {Router} from "express";
import {RecipeController} from '../Controllers/RecipeController';

class RecipeRoute {

    public static registerRoutes(recipeRoute: Router) {

        // 2. get requests and pass to controller
        recipeRoute.get("/recipes/:id", RecipeController.getRecipeByID);
        
        recipeRoute.get("/recipes", RecipeController.getRecipesByFilter);
    }
}

export {RecipeRoute}