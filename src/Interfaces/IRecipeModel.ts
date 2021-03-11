import {Date, Document} from "mongoose"
import {MealType} from '../Enums/MealType'
import {CuisineType} from '../Enums/CuisineType'
import {FeatureType} from '../Enums/FeatureType'
import {AllergyType} from '../Enums/AllergyType'
import {RecipeTag} from '../Enums/RecipeTag'


interface IRecipeModel extends Document {
    recipe_id: Number,
    name: String;
    member_id: Number;
    date: Date;
    steps: [{step: String}],
    ingredients: [{name: String, unit: String, count: Number}],
    group: Number;
    cost: Number;
    unit_cost: Number,
    photo: String;
    likes: Number;
    meal_type: MealType;
    cuisine_type: CuisineType;
    feature_type: FeatureType;
    restrictions: [AllergyType];
    recipe_tags: [RecipeTag];
}

export {IRecipeModel};