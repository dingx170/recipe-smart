"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealplanController = void 0;
const RecipeModel_1 = require("../Models/RecipeModel");
const MealplanModel_1 = require("../Models/MealplanModel");
class MealplanController {
    constructor() {
        this.idGenerator = 10000;
        this.mealplan = new MealplanModel_1.MealplanModel();
    }
    /**
     * Get all the mealplans belong to a member
     * @param req
     * @param res
     */
    getMealplansByMemberId(req, res) {
        var memberId = req.params.memberid;
        console.log("Getting Member " + memberId + "'s mealplan");
        this.mealplan.retrieveAllMealplansByMemberId(res, { member_id: memberId });
    }
    /**
     * Get shoppinglist of a mealplan
     * @param req
     * @param res
     */
    getShoppintListFromAMealplan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var mealplanId = req.params.mealplanid;
            this.mealplan.retrieveShoppinglistFromMealplan(res, { mealplan_id: mealplanId });
        });
    }
    /**
     * Get recipelist of a mealplan
     * @param req
     * @param res
     */
    getRecipeListFromAMealplan(req, res) {
        var memberId = req.params.memberid;
        var mealplanId = req.params.mealplanid;
        console.log("Getting Member " + memberId + "'s mealplan " + mealplanId + "'s recipelist");
        this.mealplan.retrieveRecipelistFromMealplan(res, { mealplan_id: mealplanId, member_id: memberId });
        console.log("View Member " + memberId + "'s mealplan " + mealplanId + "'s recipelist");
    }
    getRecipesFromMealplan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var mealplanId = req.params.mealplanid;
            let plan;
            try {
                plan = yield this.mealplan.findMealplanById(mealplanId);
            }
            catch (err) {
                // console.log(err);
            }
            if (plan) {
                let recipeId_list = [];
                for (let i = 0; i < plan.recipe_list.length; i++) {
                    recipeId_list.push(plan.recipe_list[i].recipe_id);
                }
                let recipe_list = yield RecipeModel_1.RecipeModel.retrieveRecipeListByIdlist(recipeId_list, res);
                let result = [];
                for (let i = 0; i < recipe_list.length; i++) {
                    let recipe_id = recipe_list[i].recipe_id;
                    let index = plan.recipe_list.findIndex((obj => (obj.recipe_id == recipe_id)));
                    let quantity = plan.recipe_list[index].quantity;
                    result.push({ recipe: recipe_list[i], quantity: quantity });
                }
                res.json(result);
            }
        });
    }
    /**
     * Update shoppinglist of a mealplan
     * @param req
     * @param res
     */
    // public updateShoppinglistOfAMealplan(req: Request, res: Response){
    //     var memberId = req.params.memberid;
    //     var mealplanId = req.params.mealplanid;
    //     var shoppinglist = req.body;
    //     console.log("Update Member " + memberId + "'s mealplan " + mealplanId + "'s shoppinglist");
    //     this.mealplan.updateShoppinglist(res, {mealplan_id: mealplanId, member_id: memberId}, shoppinglist);
    //     console.log("View Member " + memberId + "'s mealplan " + mealplanId + "'s shoppinglist");
    // }
    // show a recommendation lis // need a method in recipemodel
    /**
     * Get a recommendation list of recipes based on given parameters
     * @param req
     * @param res
     */
    getRecipesByFilters(req, res) {
        let budget = req.query.budget; // < budget
        let group = req.query.group;
        let meal_type = req.query.meal_type; // < group
        let cuisine_type = req.query.cuisine_type; // == ||
        let feature_type = req.query.feature_type; // == ||
        let allergy_type = req.query.restrictions; // == !(||)
        console.log(allergy_type[0] + "   allergy type..");
        console.log(allergy_type[1] + "   allergy type..");
        var filter = {};
        filter['cost'] = { '$lte': budget };
        filter['group'] = group;
        if (meal_type != 'None') {
            filter['meal_type'] = meal_type;
        }
        if (cuisine_type != 'None') {
            filter['cuisine_type'] = cuisine_type;
        }
        if (feature_type != 'None') {
            filter['feature_type'] = feature_type;
        }
        if (allergy_type) {
            filter['restrictions'] = { '$nin': allergy_type };
        }
        console.log(filter, meal_type);
        RecipeModel_1.RecipeModel.retrieveRecipesWithFilter(res, filter);
    }
    /**
     * Post a mealplan by customization
     *
     */
    postMealPlanCustomized(req, res) {
        let member_id = req.params.memberid;
        let mealplan = {};
        let body = req.body;
        let recipes = body.recipe_list;
        let budget = req.body.budget; // < budget
        let group = req.body.group; // < group
        let meal_type = req.body.meal_type;
        let cuisine_type = req.body.cuisine_type; // == ||
        let feature_type = req.body.feature_type; // == ||
        let allergy_type = req.body.allergy; // == !(||)
        let shoppinglist = this.genearteShoppingList(recipes);
        let recipelist = this.generateRecipeId(recipes);
        // let mealplan_id = this.idGenerator;
        console.log(member_id + " is adding mealpplan");
        mealplan['member_id'] = member_id;
        mealplan['mealplan_id'] = '0';
        mealplan['recipe_list'] = recipelist;
        mealplan['shopping_list'] = shoppinglist;
        mealplan['budget'] = budget;
        mealplan['group'] = group;
        mealplan['date'] = Date.now();
        if (meal_type) {
            mealplan['meal_type'] = meal_type;
        }
        if (cuisine_type) {
            mealplan['cuisine_type'] = cuisine_type;
        }
        if (feature_type) {
            mealplan['feature_type'] = feature_type;
        }
        if (allergy_type) {
            mealplan['restrictions'] = allergy_type;
        }
        console.log(mealplan);
        this.idGenerator++;
        //res.send(mealplan);
        this.mealplan.addNewMealPlan(res, mealplan);
    }
    /**
     * Not avaliable
     * FIXME: fix async problem
     * Post mealplan with one click
     * @param req request
     * @param res response
     */
    postMealPlanOneClick(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let member_id = req.params.memberid;
            let mealplan = {};
            let budget = req.query.budget; // < budget
            let group = req.query.group; // < group
            let meal_type = req.query.meal_type;
            let cuisine_type = req.query.cuisine_type; // == ||
            let feature_type = req.query.feature_type; // == ||
            let allergy_type = req.query.allergy; // == !(||)
            let mealplan_id = this.idGenerator;
            let filter = this.generateFilter(req);
            RecipeModel_1.RecipeModel.retrieveRecipesForMealPlan(filter).then(function (res) {
                let recipepool = res;
                console.log(recipepool);
                let recipes = this.genearteRecipeList(recipepool, budget, group);
                let recipelist = this.generateRecipeId(recipes);
                let shoppinglist = this.genearteShoppingList(recipes);
                mealplan['member_id'] = member_id;
                mealplan['mealplan_id'] = mealplan_id;
                mealplan['recipe_list'] = recipelist;
                mealplan['shopping_list'] = shoppinglist;
                mealplan['budget'] = budget;
                mealplan['group'] = group;
                if (meal_type) {
                    mealplan['meal_type'] = meal_type;
                }
                if (cuisine_type) {
                    mealplan['cuisine_type'] = cuisine_type;
                }
                if (feature_type) {
                    mealplan['feature_type'] = feature_type;
                }
                if (allergy_type) {
                    mealplan['allergy_type'] = allergy_type;
                }
                this.idGenerator++;
                console.log(mealplan);
                res.send(mealplan);
            }).catch(function (err) {
                console.log(err);
            });
            // MealplanModel.createMealPlan(res, req);
        });
    }
    /**
     * delete mealplan
     * @param req request
     * @param res response
     */
    deleteMealplan(req, res) {
        let mealplanId = req.params.mealplanid;
        console.log({ mealplan_id: mealplanId });
        this.mealplan.removeMealplan(res, { mealplan_id: mealplanId });
    }
    /**
     * Generator an Object store all the filters
     */
    generateFilter(req) {
        let budget = req.query.budget; // < budget
        let group = req.query.group;
        let meal_type = req.query.meal_type; // < group
        let cuisine_type = req.query.cuisine_type; // == ||
        let feature_type = req.query.feature_type; // == ||
        let allergy_type = req.query.allergy; // == !(||)
        var filter = {};
        filter['cost'] = { '$lte': budget };
        filter['group'] = group;
        if (meal_type) {
            filter['meal_type'] = { '$in': meal_type };
        }
        if (cuisine_type) {
            filter['cuisine_type'] = { '$in': cuisine_type };
        }
        if (feature_type) {
            filter['feature_type'] = { '$in': feature_type };
        }
        if (allergy_type) {
            filter['allergy_type'] = { '$nin': allergy_type };
        }
        return filter;
    }
    /**
     * Create a list of recipe satisfied budget and dish. The recipes are
     * selected from recipelist.
     * @param recipelist List of recipe
     * @param budget budget
     * @param dish total number of dishes required
     */
    genearteRecipeList(recipelist, budget, dish) {
        console.log('recipelist');
        console.log(typeof recipelist);
        let recipes;
        let total = 0;
        while (total < dish) {
            var index = MealplanController.generateRandomNumber(recipelist.length);
            var recipe = recipelist[index];
            var quatity = 1;
            if (recipe.cost <= budget / dish) {
                recipes.push({ recipe: recipe, quatity: quatity });
                total++;
            }
            recipelist.splice(index, 1);
        }
        //console.log(recipes.length);
        return recipes;
    }
    /**
     * Generate an random number
     * @param max bond of random number generator
     */
    static generateRandomNumber(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    /*
    * method for testing only
    */
    test(req, res) {
        let a = req.body.recipelist;
        let g = req.query.group;
        let b = req.query.budget;
        let d = req.query.dish;
        let recipes = this.genearteRecipeList(a, b, d);
        console.log(recipes.length);
        var shop = this.genearteShoppingList(recipes);
        res.send({ recipes: recipes, shoplist: shop });
    }
    /**
     * generate a shopping list from a given recipe list
     * @param recipelist: List of recipe
     */
    genearteShoppingList(recipelist) {
        //console.log(recipelist.length);
        let test = [];
        for (let i = 0; i < recipelist.length; i++) {
            let ingredientlist = recipelist[i].recipe.ingredients;
            var recipe = recipelist[i];
            //console.log(recipe.recipe.ingredients);
            for (let i = 0; i < ingredientlist.length; i++) {
                //console.log(ingredientlist[i]);
                var ingredient = ingredientlist[i];
                let ingredientName = ingredient.name;
                let ingredientUnit = ingredient.unit;
                var index = test.findIndex((obj => (obj.name == ingredientName && obj.unit == ingredientUnit)));
                if (index == -1) {
                    var quatity = ingredient.count;
                    test.push({ name: ingredientName, unit: ingredientUnit, count: quatity });
                }
                else {
                    test[index].count = test[index].count.valueOf() + ingredient.count.valueOf();
                }
            }
        }
        //console.log(test);
        return test;
    }
    /**
     * generate a list of {recipe_id: Number, quatity: Number} from
     * a list of RecipeModel
     * @param recipes list of RecipeModel
     */
    generateRecipeId(recipes) {
        let recipelist = [];
        for (let i = 0; i < recipes.length; i++) {
            console.log(recipes[i]);
            if (recipes[i].quantity != 0) {
                let recipe = recipes[i].recipe;
                let quantity = recipes[i].quantity;
                let recipe_id = recipe.recipe_id;
                recipelist.push({ recipe_id: recipe_id, quantity: quantity });
            }
        }
        return recipelist;
    }
}
exports.MealplanController = MealplanController;
