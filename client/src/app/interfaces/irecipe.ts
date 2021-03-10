import { FoodAllergy } from '../enums/food-allergy.enum'
import { Cuisine } from '../enums/cuisine.enum'
import { Feature } from '../enums/feature.enum'
import { MealType } from '../enums/meal-type.enum'
import { RecipeTag } from '../enums/recipe-tag.enum'

export interface IRecipe {
    recipe_id: number;
    name: string;
    member_id: number;
    date: Date;
    steps: [{step: string}],
    ingredients: [{name: string, unit: string, count: number}],
    group: number;
    cost: number;
    unit_cost: number;
    photo: any;
    likes: number;
    meal_type: MealType;
    cuisine_type: Cuisine;
    feature_type: Feature;
    restrictions: [FoodAllergy];
    recipe_tags: [RecipeTag]
}
