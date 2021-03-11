import {Schema} from "mongoose";
import {DataAccess} from '../DataAccess';
import {ICounterModel} from '../Interfaces/ICounterModel';

let mongooseConnection = DataAccess.mongooseConnection;

class CounterModel {
    public static schema: any;
    public static model: any;
  
    public static createSchema(): void {
  
      if (this.schema) {
        return;
      }
  
      this.schema = new Schema(
        {
          name: String,
          count: Number,
        }, {collection: 'counter'}
      );
    }
  
    public static createModel(): void {
      if (this.model) {
        return;
      }
  
      this.model = mongooseConnection.model<ICounterModel>("Counter", this.schema);
    }
  
  }
  
  CounterModel.createSchema();
  CounterModel.createModel();
  
  export {CounterModel};
  

    