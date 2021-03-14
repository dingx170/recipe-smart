import  {Schema} from "mongoose"
import {DataAccess} from '../DataAccess'
import {IUserModel} from '../Interfaces/IUserModel'
import {AllergyType} from '../Enums/AllergyType'
import {CounterModel} from './CounterModel';

let mongooseConnection = DataAccess.mongooseConnection;

/**
 * UserModel class as a singleton class
 * Used as access to mongo data source in retrieving, updating user
 */
class UserModel {
  private schema: any;
  private model: any;
  private static instance: UserModel;
  
 

  private constructor() {
    this.createSchema();
    this.createModel();
  }

  public static getInstance():any{
    if(this.instance == null){
      return new UserModel();
    }return this.instance;
  }

  public createSchema(): void {
    this.schema = new Schema(
      {
        user_id: Number,
        name: String,
        password: String,
        email: String,
        photo: Buffer,
        ssoId: String,
        restrictions: [
          {
            type: String,
            enum: AllergyType
          }
        ]
      }, {collection: 'users'}
    );
  }

  public createModel(): void {
    this.model = mongooseConnection.model<IUserModel>("User", this.schema);
  }
  
  public getModel(): any {
    return this.model;
  }

  /**
   * Retrieve user by id and return structured data to requesting end
   * @param res 
   * @param myid 
   */
  public retrieveUserByID(res: any, myid: any): any {

    let query = this.model.findOne({user_id:myid});
    query.exec( (err, item) => {
        if(err){
          console.log(err);
          res.json({ret_code: -1, ret_msg: 'User Not Exist', userid: myid, user_obj: {}});
        }

        console.log("get item: " + item);
        res.json({ret_code: 1, ret_msg: 'User Found', userid: myid, 
                  user_obj: item
                });
      });
  }


  /**
   * Create new user with given user object
   * returns user object and user_id
   * @param user_specs 
   * @param res 
   */
  public createUser(user_specs: any, res: any): any{


    CounterModel.model.findOneAndUpdate({"name": "user"}, {$inc: {'count': 1}}, {useFindAndModify: false}, (err, record) => {
      if (err){
        res.json({ret_code: -1, ret_msg: "creation failed", userid: -1})
        return;
      }

      user_specs.user_id = record.count + 1;

      this.model(user_specs).save((err, item) => {
        if (err) {
          res.json({ret_code: -1, ret_msg: "create user failed", userid: -1});
          return;
        }
        res.json({ret_code: 1, ret_msg: "updated successfully.", userid: user_specs.user_id});
      });  
      
    });
  }

  /**
   * Update user profile with given specs
   * will return error -1 to frontend when failed otherwise code 1 and user id back to front end
   * @param id 
   * @param new_specs 
   * @param res 
   */
  public updateUser(id: any, new_specs: any, res: any): any{
    this.model.updateOne({user_id: id}, new_specs, (err) =>{
        if(err){
            console.log(err);
            console.log('update behavior failed.')
            res.json({ret_code: -1, ret_msg: "update failed", userid: id});
            return;
        }
        res.json({ret_code: 1, ret_msg: "updated successfully.", userid: id});
    })

  }

  public async findUser(name: String, password: String, res: any){
    console.log(name);
    return await this.model.findOne({name: name});
  }

  /**
   * Validate the name and email to see if they already exists
   * @param username 
   * @param userEmail 
   * @param resp 
   */
  public validateNameEmail(username: string, userEmail: string, resp: any): any{
    this.model.exists({$or:[{name: username}, {email: userEmail}]}, (err, res) =>{
      if(err){
        console.log(err);
        console.log("no match found");
        resp.json(err);
      }
      else{
        console.log("validation result: " + res);
        resp.json(res);
      }

    });
  }

  
  public async validateUserBySsoId(ssoId: String){
    console.log(ssoId);
    return await this.model.exists({ssoId: ssoId});
  }

  /**
   * Find and return user item by sso id
   * @param ssoId 
   * @param res 
   */
  public getUserBySsoId(ssoId: string, res: any){
    let query = this.model.findOne({ssoId:ssoId});
    query.exec((err, item) =>{
      if(err){
        console.log(err);
      }
      console.log(item);
      res.json(item); 
      
    })
  }

  public addUserThruSSO(user_specs: any, res: any): any{

    CounterModel.model.findOneAndUpdate({"name": "user"}, {$inc: {'count': 1}}, {useFindAndModify: false}, (err, record) => {
      if (err){
        res.json({ret_code: -1, ret_msg: "creation failed", userid: -1})
        return;
      }

      user_specs.user_id = record.count + 1;

      this.model(user_specs).save((err, item) => {
        if (err) {
          console.log(err);
          return;
        }
        return item;
      });  
      
    });
  }

}

export {UserModel};

    