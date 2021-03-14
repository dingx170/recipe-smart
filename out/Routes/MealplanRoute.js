"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealplanRoute = void 0;
const MealPlanController_1 = require("../Controllers/MealPlanController");
class MealplanRoute {
    static registerMealplanRoutes(mealplanRouter) {
        mealplanRouter.get('/api/mealplan/:memberid', (req, res) => {
            this.mealplanController.getMealplansByMemberId(req, res);
        });
        mealplanRouter.get('/api/mealplan/:memberid/plans/:mealplanid/shoppinglist', (req, res) => {
            this.mealplanController.getShoppintListFromAMealplan(req, res);
        });
        mealplanRouter.get('/api/mealplan/:memberid/plans/:mealplanid/recipelist', (req, res) => {
            this.mealplanController.getRecipesFromMealplan(req, res);
        });
        mealplanRouter.delete('/api/mealplan/:memberid/:mealplanid', (req, res) => {
            this.mealplanController.deleteMealplan(req, res);
        });
        mealplanRouter.get('/api/mealplan/:memberid/customization/getrecipelist', (req, res) => {
            this.mealplanController.getRecipesByFilters(req, res);
        });
        mealplanRouter.post('/api/mealplan/:memberid/customization/', (req, res) => {
            this.mealplanController.postMealPlanCustomized(req, res);
        });
    }
}
exports.MealplanRoute = MealplanRoute;
MealplanRoute.mealplanController = new MealPlanController_1.MealplanController();
//static mealplan: MealplanModel = new MealplanModel()
MealplanRoute.idGenerator = 100;
