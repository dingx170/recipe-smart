import {ObjectId, Date, Document} from "mongoose"
import {AllergyType} from '../Enums/AllergyType'


interface IUserModel extends Document {
    
    user_id: Number,
    name: String;
    password:String,
    email: String,
    photo: Buffer,
    ssoId: String,
    restrictions: [AllergyType]
}

export {IUserModel};