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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const googleOauth2_1 = __importDefault(require("./googleOauth2"));
const UserController_1 = require("../Controllers/UserController");
let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;
// Creates a Passport configuration for Google
class GooglePassport {
    constructor() {
        this.clientId = googleOauth2_1.default.id;
        this.secretId = googleOauth2_1.default.secret;
        passport.use(new GoogleStrategy({
            clientID: this.clientId,
            clientSecret: this.secretId,
            callbackURL: "/auth/google/callback"
            //                profileFields: ['id', 'displayName', 'emails']
        }, (accessToken, refreshToken, profile, done) => {
            console.log("inside new password google strategy");
            process.nextTick(() => __awaiter(this, void 0, void 0, function* () {
                console.log("==============================================");
                console.log('validating google profile:' + JSON.stringify(profile));
                console.log("userId:" + profile.id);
                console.log("displayName: " + profile.displayName);
                console.log("retrieve all of the profile info needed");
                console.log("+++++++++++++++++++");
                this.ssoId = profile.id;
                this.displayName = profile.displayName;
                // let userModel = UserController.userModel.getModel();
                let user = yield UserController_1.UserController.userModel.validateUserBySsoId(profile.id);
                console.log(user);
                if (user) {
                    console.log("existing user");
                    // this.userId = user.user_id;
                    done(null, user);
                }
                else {
                    console.log("create user");
                    let newUser = {
                        name: profile.displayName,
                        ssoId: profile.id
                    };
                    UserController_1.UserController.userModel.addUserThruSSO(newUser, (res) => {
                        console.log(res);
                    });
                }
                console.log("+++++++++++++++++++");
                console.log("==============================================");
                // this.email = profile.emails[0].value;
                return done(null, profile);
            }));
        }));
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
}
exports.default = GooglePassport;
