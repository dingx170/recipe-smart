  
import googleAppAuth from './googleOauth2';
import {UserController} from '../Controllers/UserController';
import { IUserModel } from '../Interfaces/IUserModel';

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;

// Creates a Passport configuration for Google
class GooglePassport {

    clientId: string;
    secretId: string;
     
    constructor() { 
        this.clientId = googleAppAuth.id;
        this.secretId = googleAppAuth.secret;

        passport.use(new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: "/auth/google/callback"
//                profileFields: ['id', 'displayName', 'emails']
            },
            (accessToken, refreshToken, profile, done) => {
                console.log("inside new password google strategy");
                process.nextTick( () => {
                    console.log("==============================================");
                    console.log('validating google profile:' + JSON.stringify(profile));
                    console.log("userId:" + profile.id);
                    console.log("displayName: " + profile.displayName);
                    console.log("retrieve all of the profile info needed");

                    console.log("+++++++++++++++++++");

                    let userModel = UserController.userModel;

                    userModel.findOne({
                        ssoId: profile.id
                    }).then((userRecord, err) => {
                        if (userRecord) {
                            done(null, userRecord);
                        } else {
                            const newUser = new userModel({
                                ssoId: profile.id,
                                name: profile.displayName
                            });
                            newUser.save().then((newUser) => {
                                done(null, newUser);
                            })
                        }
                    }).catch(err => {
                        console.log(err);
                    });

                    // let user :any = await UserController.userModel.findUserBySsoID(profile.id);
                    // console.log(user.name);

                    // if (user) {
                    //     console.log("existing user");
                    //     done(null, user);
                    // } else {
                    //     console.log("create user");
                    //     let newUser : any = {
                    //         name : profile.displayName,
                    //         ssoId : profile.id
                    //     }
                    //     UserController.userModel.createUser(newUser, (res) => {
                    //         console.log(res);
                    //     });
                    // }
                    console.log("+++++++++++++++++++");
                    console.log("==============================================");
                    // this.email = profile.emails[0].value;
                    return done(null, profile);
                }); 
            }
        ));

        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            done(null, user);
        });
    }
}
export default GooglePassport;