import {ObjectId, Date, Document} from "mongoose"
import {AllergyType} from '../Enums/AllergyType'

interface IIngredientModel extends Document {
    ingredient_id: Number,
    name: String;
    unit: String;
    price: Number;
    restrictions: [AllergyType];
}

export {IIngredientModel};