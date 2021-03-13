"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRecipeRoute = void 0;
const RecipeController_1 = require("../Controllers/RecipeController");
class MyRecipeRoute {
    static registerRoutes(recipeRoute) {
        recipeRoute.get("/myrecipes/:member_id", RecipeController_1.RecipeController.getRecipesByMemberID);
        recipeRoute.post("/myrecipes/:member_id", RecipeController_1.RecipeController.postRecipeByMemberID);
        recipeRoute.put("/myrecipes/:member_id/:recipe_id", RecipeController_1.RecipeController.putRecipe);
        recipeRoute.delete("/myrecipes/:member_id/:recipe_id", RecipeController_1.RecipeController.deleteRecipe);
    }
}
exports.MyRecipeRoute = MyRecipeRoute;
