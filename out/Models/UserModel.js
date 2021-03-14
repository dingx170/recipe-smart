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
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const DataAccess_1 = require("../DataAccess");
const AllergyType_1 = require("../Enums/AllergyType");
const CounterModel_1 = require("./CounterModel");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
/**
 * UserModel class as a singleton class
 * Used as access to mongo data source in retrieving, updating user
 */
class UserModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    static getInstance() {
        if (this.instance == null) {
            return new UserModel();
        }
        return this.instance;
    }
    createSchema() {
        this.schema = new mongoose_1.Schema({
            user_id: Number,
            name: String,
            password: String,
            email: String,
            photo: Buffer,
            ssoId: String,
            restrictions: [
                {
                    type: String,
                    enum: AllergyType_1.AllergyType
                }
            ]
        }, { collection: 'users' });
    }
    createModel() {
        this.model = mongooseConnection.model("User", this.schema);
    }
    getModel() {
        return this.model;
    }
    /**
     * Retrieve user by id and return structured data to requesting end
     * @param res
     * @param myid
     */
    retrieveUserByID(res, myid) {
        let query = this.model.findOne({ user_id: myid });
        query.exec((err, item) => {
            if (err) {
                console.log(err);
                res.json({ ret_code: -1, ret_msg: 'User Not Exist', userid: myid, user_obj: {} });
            }
            console.log("get item: " + item);
            res.json({ ret_code: 1, ret_msg: 'User Found', userid: myid,
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
    createUser(user_specs, res) {
        CounterModel_1.CounterModel.model.findOneAndUpdate({ "name": "user" }, { $inc: { 'count': 1 } }, { useFindAndModify: false }, (err, record) => {
            if (err) {
                res.json({ ret_code: -1, ret_msg: "creation failed", userid: -1 });
                return;
            }
            user_specs.user_id = record.count + 1;
            this.model(user_specs).save((err, item) => {
                if (err) {
                    res.json({ ret_code: -1, ret_msg: "create user failed", userid: -1 });
                    return;
                }
                res.json({ ret_code: 1, ret_msg: "updated successfully.", userid: user_specs.user_id });
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
    updateUser(id, new_specs, res) {
        this.model.updateOne({ user_id: id }, new_specs, (err) => {
            if (err) {
                console.log(err);
                console.log('update behavior failed.');
                res.json({ ret_code: -1, ret_msg: "update failed", userid: id });
                return;
            }
            res.json({ ret_code: 1, ret_msg: "updated successfully.", userid: id });
        });
    }
    findUser(name, password, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(name);
            return yield this.model.findOne({ name: name });
        });
    }
    /**
     * Validate the name and email to see if they already exists
     * @param username
     * @param userEmail
     * @param resp
     */
    validateNameEmail(username, userEmail, resp) {
        this.model.exists({ $or: [{ name: username }, { email: userEmail }] }, (err, res) => {
            if (err) {
                console.log(err);
                console.log("no match found");
                resp.json(err);
            }
            else {
                console.log("validation result: " + res);
                resp.json(res);
            }
        });
    }
    validateUserBySsoId(ssoId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(ssoId);
            return yield this.model.exists({ ssoId: ssoId });
        });
    }
    /**
     * Find and return user item by sso id
     * @param ssoId
     * @param res
     */
    getUserBySsoId(ssoId, res) {
        let query = this.model.findOne({ ssoId: ssoId });
        query.exec((err, item) => {
            if (err) {
                console.log(err);
            }
            console.log(item);
            res.json(item);
        });
    }
    addUserThruSSO(user_specs, res) {
        CounterModel_1.CounterModel.model.findOneAndUpdate({ "name": "user" }, { $inc: { 'count': 1 } }, { useFindAndModify: false }, (err, record) => {
            if (err) {
                res.json({ ret_code: -1, ret_msg: "creation failed", userid: -1 });
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
exports.UserModel = UserModel;
