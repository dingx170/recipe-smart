"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRoute = void 0;
const RecipeModel_1 = require("../Models/RecipeModel");
class RecipeRoute {
    constructor() {
        this.recipeModel = new RecipeModel_1.RecipeModel();
    }
    registerRoutes(recipeRoute) {
        // view one recipe by id // ./recipes/ababababa
        recipeRoute.get("/recipes/:id", (req, res) => {
            let id = req.params.id;
            this.recipeModel.retrieveRecipeByID(res, { recipe_id: id });
            console.log("View one recipe by id");
        });
        //Above route shades the /filter route
        // view all or one through filtration
        // view one recipe by name // ./recipes?name=xxx&meal_type=xxx&...
        recipeRoute.get("/recipes", (req, res) => {
            let name = req.query.name;
            let meal_type = req.query.meal_type;
            let cuisine_type = req.query.cuisine_type;
            let feature_type = req.query.feature_type;
            console.log(name);
            console.log(meal_type);
            console.log(cuisine_type);
            console.log(feature_type);
            if (name) {
                this.recipeModel.retrieveRecipeByName(res, { name: name });
                console.log("View recipes by name");
            }
            else if (meal_type || cuisine_type || feature_type) {
                this.recipeModel.retrieveRecipeByType(res, { meal_type: meal_type, cuisine_type: cuisine_type, feature_type: feature_type });
                console.log("View recipes by type");
            }
            else {
                this.recipeModel.retrieveAllRecipes(res);
                console.log("View all recipes");
            }
        });
    }
}
exports.RecipeRoute = RecipeRoute;
