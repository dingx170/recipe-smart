import {Document} from "mongoose"

interface ICounterModel extends Document {
    name: String;
    count: Number;
}

export {ICounterModel};