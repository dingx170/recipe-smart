import { FoodAllergy } from '../enums/food-allergy.enum'

export interface IUser{

  name: string,
  password:string,
  email: string,
  photo?: any,
  restrictions: FoodAllergy[]

}
