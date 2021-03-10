import {ObjectId, Date, Document} from "mongoose"
import {MealType} from '../Enums/MealType'
import {CuisineType} from '../Enums/CuisineType'
import {FeatureType} from '../Enums/FeatureType'
import {AllergyType} from '../Enums/AllergyType'
import {RecipeTag} from '../Enums/RecipeTag'


interface IMealplanModel extends Document {
    mealplan_id:Number,
    member_id: Number,
    date: Date;
    budget: Number;
    group: Number;
    recipe_list: {recipe_id: Number, quantity: Number}[];
    shopping_list: {name: String, unit: String, count: Number}[];
    meal_type: MealType;
    cuisine_type: CuisineType;
    feature_type: FeatureType;
    restrictions: [AllergyType];
}

export{IMealplanModel}