import {Request, Response} from "express";
import {UserModel} from '../Models/UserModel';

class UserController{

    public static userModel = UserModel.getInstance();

    /**
     * Delegates to user model to create user, print out log info to the console
     * @param req 
     * @param res 
     */
    public static createUser(req : Request, res : Response){
        console.log(req.body);
        
	    UserController.userModel.createUser(req.body, res);

	    console.log("executed create user")
    }


    /**
     * Delegates to user model to retrieve user with path variable id within the request
     * @param req 
     * @param res 
     */
    public static retrieveUserByID(req : Request, res : Response){
        let id = req.params.id;
        console.log('Query single list with uid: ' + id);
        UserController.userModel.retrieveUserByID(res, id);

        console.log("executed retrieve user by id")
    }

    /**
     * take the request and response and delegates to user model to do the logic
     * @param req 
     * @param res 
     */
    public static updateUser(req : Request, res : Response){
        UserController.userModel.updateUser(req.params.id, req.body, res);
	    console.log("updated user");
    }


    public static async logincheck(req: Request, res : Response){
        let id = req.body.name;
        let password = req.body.password;
        console.log("username: " + id);
        console.log("password: " + password);
        let ans: any;
        try{
            ans = await UserController.userModel.findUser(id, password, res);
        }catch(err){
            // console.log(err);
        }
        if(ans) {
            let vali = ans.password == password;
            console.log(ans.password + " input: " + password +" result is " + vali);
            if(vali){
                req.session.regenerate(function(err) {
                    if(err){
                        return res.json({ret_code: 2, ret_msg: 'Login failed', userid: -1, userObj: null});                
                    }
                    
                    req.session.loginUser = ans.user_id;
                    
                    res.json({ret_code: 0, ret_msg: 'Login Successful', userid: req.session.loginUser, userObj: ans});                           
                });
            }else{
                res.json({ret_code: 1, ret_msg: 'Wrong username or password'});
            }  
        } else {
            res.json({ret_code: 1, ret_msg: 'The user does not exist!'});
        }
    }

    public static getSession(req: Request, res : Response){
        var sess = req.session;
        var loginUser = sess.loginUser;
        var isLogined = !!loginUser;

        res.send({
            isLogined: isLogined,
            id: loginUser || ''
        });
    }

    /**
     * get the name and email from the request query and pass them to user model's related function
     * @param req 
     * @param res 
     */
    public static validateNameEmail(req: Request, res : Response){
        let name = req.query.name;
        let email = req.query.email;

        console.log("email:" + email);
        console.log("username:" + name);
        
        UserController.userModel.validateNameEmail(name, email, res);
        console.log("executed validation for name and email");
        

    }

    
    public static retrieveUserBySsoId(res: Response, ssoId: string){
        this.userModel.getUserBySsoId(ssoId, res);
    }
    // public static retrieveUser(req : Request, res : Response){
    //     let filter = req.query.body;
    
    //     UserController.userModel.retrieveUser(res, {filter});

    //     console.log("executed retrieve user by condition");
    // }



}
export {UserController}