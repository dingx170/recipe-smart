  
import googleAppAuth from './googleOauth2';
import {UserController} from '../Controllers/UserController';
import { IUserModel } from '../Interfaces/IUserModel';

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;

// Creates a Passport configuration for Google
class GooglePassport {

    clientId: string;
    secretId: string;
    displayName: string;
    ssoId: string;
    clientEmail: string;
     
    constructor() { 
        this.clientId = googleAppAuth.id;
        this.secretId = googleAppAuth.secret;

        passport.use(new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: "/auth/google/callback",
                profileFields: ['id', 'displayName', 'emails']
            },
            (accessToken, refreshToken, profile, done) => {
                console.log("inside new password google strategy");
                process.nextTick( async () => {

                    this.ssoId = profile.id;
                    this.displayName = profile.displayName;
                    this.clientEmail = profile.emails[0].value;

                    let user :any = await UserController.userModel.validateUserBySsoId(profile.id);
                    console.log('user existing: ' + user);

                    if (user) {
                        console.log("existing user");
                        done(null, user);
                    } else {
                        console.log("create user");
                        let newUser : any = {
                            name : profile.displayName,
                            ssoId : profile.id,
                            email : profile.emails[0].value
                        }
                        UserController.userModel.addUserThruSSO(newUser, (res) => {
                            console.log(res);
                        });
                    }
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