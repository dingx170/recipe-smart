import { FoodAllergy } from '../enums/food-allergy.enum'
import { Cuisine } from '../enums/cuisine.enum'
import { Feature } from '../enums/feature.enum'
import { MealType } from '../enums/meal-type.enum'

export interface IMealplan {
    mealplan_id: number;
    member_id: number;
    date: Date;
    budget: number;
    group: number;
    recipe_list: any;
    shopping_list: [{ingredient_id: Number, quantity: Number}];
    meal_type: MealType;
    cuisine_type: Cuisine;
    feature_type: Feature;
    restrictions: [FoodAllergy];
}
