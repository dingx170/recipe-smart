"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealplanRoute = void 0;
const MealPlanController_1 = require("../Controllers/MealPlanController");
class MealplanRoute {
    static registerMealplanRoutes(mealplanRouter) {
        mealplanRouter.get('/mealplan/:memberid', (req, res) => {
            this.mealplanController.getMealplansByMemberId(req, res);
        });
        mealplanRouter.get('/mealplan/:memberid/plans/:mealplanid/shoppinglist', (req, res) => {
            this.mealplanController.getShoppintListFromAMealplan(req, res);
        });
        mealplanRouter.get('/mealplan/:memberid/plans/:mealplanid/recipelist', (req, res) => {
            this.mealplanController.getRecipesFromMealplan(req, res);
        });
        mealplanRouter.delete('/mealplan/:memberid/:mealplanid', (req, res) => {
            this.mealplanController.deleteMealplan(req, res);
        });
        mealplanRouter.get('/mealplan/:memberid/customization/getrecipelist', (req, res) => {
            this.mealplanController.getRecipesByFilters(req, res);
        });
        mealplanRouter.post('/mealplan/:memberid/customization/', (req, res) => {
            this.mealplanController.postMealPlanCustomized(req, res);
        });
    }
}
exports.MealplanRoute = MealplanRoute;
MealplanRoute.mealplanController = new MealPlanController_1.MealplanController();
//static mealplan: MealplanModel = new MealplanModel()
MealplanRoute.idGenerator = 100;
