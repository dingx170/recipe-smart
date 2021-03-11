"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mealplan = void 0;
const MealplanModel_1 = require("../Models/MealplanModel");
class Mealplan {
    constructor() {
        this.Mealplan = new MealplanModel_1.MealplanModel();
        this.idGenerator = 1000;
    }
    registerRoutes(router) {
        this.route(router);
    }
    route(router) {
        router.get('/mealplan', (req, res) => {
            console.log("get mealplan");
            var hello = "Hello Mealplan";
            res.send(hello);
        });
        router.get('/mealplan/:memberid', (req, res) => {
            var memberId = req.params.memberid;
            console.log("Getting Member " + memberId + "'s mealplan");
            this.Mealplan.retrieveAllMealplansByMemberId(res, { member_id: memberId });
            console.log("View mealplan of Member " + memberId);
        });
        router.post('/mealplan/:memberid', (req, res) => {
            var mealplan = req.body;
            mealplan.mealplan_id = this.idGenerator;
            console.log("Adding mealplan " + this.idGenerator);
            this.Mealplan.addNewMealPlan(res, mealplan);
            console.log("Added mealplan " + this.idGenerator);
            this.idGenerator++;
        });
        router.get('/mealplan/:memberid/:mealplanid/shoppinglist', (req, res) => {
            var memberId = req.params.memberid;
            var mealplanId = req.params.mealplanid;
            console.log("Getting Member " + memberId + "'s mealplan " + mealplanId + "'s shoppinglist");
            this.Mealplan.retrieveShoppinglistFromMealplan(res, { mealplan_id: mealplanId, member_id: memberId });
            console.log("View Member " + memberId + "'s mealplan " + mealplanId + "'s shoppinglist");
        });
        router.get('/mealplan/:memberid/:mealplanid/recipelist', (req, res) => {
            var memberId = req.params.memberid;
            var mealplanId = req.params.mealplanid;
            console.log("Getting Member " + memberId + "'s mealplan " + mealplanId + "'s recipelist");
            this.Mealplan.retrieveRecipelistFromMealplan(res, { mealplan_id: mealplanId, member_id: memberId });
            console.log("View Member " + memberId + "'s mealplan " + mealplanId + "'s recipelist");
        });
        router.put('/mealplan/:memberid/:mealplanid/shoppinglist', (req, res) => {
            var memberId = req.params.memberid;
            var mealplanId = req.params.mealplanid;
            var shoppinglist = req.body;
            console.log("Update Member " + memberId + "'s mealplan " + mealplanId + "'s shoppinglist");
            this.Mealplan.updateShoppinglist(res, { mealplan_id: mealplanId, member_id: memberId }, shoppinglist);
            console.log("View Member " + memberId + "'s mealplan " + mealplanId + "'s shoppinglist");
        });
    }
}
exports.Mealplan = Mealplan;
