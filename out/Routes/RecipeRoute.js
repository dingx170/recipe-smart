"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRoute = void 0;
const RecipeController_1 = require("../Controllers/RecipeController");
class RecipeRoute {
    static registerRoutes(recipeRoute) {
        recipeRoute.get("/api/recipes/:id", RecipeController_1.RecipeController.getRecipeByID);
        recipeRoute.get("/api/recipes", RecipeController_1.RecipeController.getRecipesByFilter);
    }
}
exports.RecipeRoute = RecipeRoute;
