"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserModel_1 = require("../Models/UserModel");
class UserController {
    /**
     * Delegates to user model to create user, print out log info to the console
     * @param req
     * @param res
     */
    static createUser(req, res) {
        console.log(req.body);
        UserController.userModel.createUser(req.body, res);
        console.log("executed create user");
    }
    /**
     * Delegates to user model to retrieve user with path variable id within the request
     * @param req
     * @param res
     */
    static retrieveUserByID(req, res) {
        let id = req.params.id;
        console.log('Query single list with uid: ' + id);
        UserController.userModel.retrieveUserByID(res, id);
        console.log("executed retrieve user by id");
    }
    /**
     * take the request and response and delegates to user model to do the logic
     * @param req
     * @param res
     */
    static updateUser(req, res) {
        UserController.userModel.updateUser(req.params.id, req.body, res);
        console.log("updated user");
    }
    static logincheck(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.body.name;
            let password = req.body.password;
            console.log("username: " + id);
            console.log("password: " + password);
            let ans;
            try {
                ans = yield UserController.userModel.findUser(id, password, res);
            }
            catch (err) {
                // console.log(err);
            }
            if (ans) {
                let vali = ans.password == password;
                console.log(ans.password + " input: " + password + " result is " + vali);
                if (vali) {
                    req.session.regenerate(function (err) {
                        if (err) {
                            return res.json({ ret_code: 2, ret_msg: 'Login failed', userid: -1, userObj: null });
                        }
                        req.session.loginUser = ans.user_id;
                        res.json({ ret_code: 0, ret_msg: 'Login Successful', userid: req.session.loginUser, userObj: ans });
                    });
                }
                else {
                    res.json({ ret_code: 1, ret_msg: 'Wrong username or password' });
                }
            }
            else {
                res.json({ ret_code: 1, ret_msg: 'The user does not exist!' });
            }
        });
    }
    static getSession(req, res) {
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
    static validateNameEmail(req, res) {
        let name = req.query.name;
        let email = req.query.email;
        console.log("email:" + email);
        console.log("username:" + name);
        UserController.userModel.validateNameEmail(name, email, res);
        console.log("executed validation for name and email");
    }
    static retrieveUserBySsoId(res, ssoId) {
        this.userModel.getUserBySsoId(ssoId, res);
    }
}
exports.UserController = UserController;
UserController.userModel = UserModel_1.UserModel.getInstance();
