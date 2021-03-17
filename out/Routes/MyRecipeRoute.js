"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRecipeRoute = void 0;
const RecipeController_1 = require("../Controllers/RecipeController");
class MyRecipeRoute {
    static registerRoutes(recipeRoute) {
        recipeRoute.get("/api/myrecipes/:member_id", RecipeController_1.RecipeController.getRecipesByMemberID);
        recipeRoute.post("/api/myrecipes/:member_id", RecipeController_1.RecipeController.postRecipeByMemberID);
        recipeRoute.put("/api/myrecipes/:member_id/:recipe_id", RecipeController_1.RecipeController.putRecipe);
        recipeRoute.delete("/api/myrecipes/:member_id/:recipe_id", RecipeController_1.RecipeController.deleteRecipe);
    }
}
exports.MyRecipeRoute = MyRecipeRoute;
