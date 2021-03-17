"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passport = void 0;
const passport_1 = __importDefault(require("passport"));
const UserController_1 = require("../Controllers/UserController");
let logout = require('express-passport-logout');
class Passport {
    static registerRoutes(recipeRoute, googlePassportObj) {
        recipeRoute.get('/auth/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
        // req.session.loginUser = ans.user_id;
        recipeRoute.get('/auth/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/' }), (req, res) => {
            console.log("successfully authenticated user and returned to callback page.");
            console.log("redirecting to /#/recipes");
            console.log('Prining sso id from google in line 26: ' + googlePassportObj.ssoId);
            res.redirect('/#/recipes');
        });
        recipeRoute.get('/auth/user', this.validateAuth, (req, res) => {
            // try get user id from google passport obj
            let ssoId;
            if (req.session.ssoId) {
                ssoId = req.session.ssoId;
                console.log("existing req.session.ssoId = ", req.session.ssoId);
            }
            else {
                // req.session.userssoId = googlePassportObj.ssoId;
                // ssoId = req.session.userssoId;
                req.session.regenerate(function (err) {
                    if (err) {
                        return res.json({ ret_code: 2, ret_msg: 'failed' });
                    }
                    req.session.ssoId = googlePassportObj.ssoId;
                    console.log("setting req.session.ssoId = ", req.session.ssoId);
                    res.json({ ret_code: 0, ret_msg: 'success' });
                });
                ssoId = googlePassportObj.ssoId;
            }
            // try get user id from google passport obj
            //let ssoId = googlePassportObj.ssoId;
            console.log("user SSO Id: " + ssoId);
            UserController_1.UserController.retrieveUserBySsoId(res, ssoId);
            // Will it still pass any result if directed to index page? No.
        });
        recipeRoute.get('/logout', (req, res) => {
            // googlePassportObj.clientEmail = "";
            logout();
            return res.redirect("/#/recipes");
        });
    }
    static validateAuth(req, res, next) {
        //console.log("req.cookies.user_sid: " + req.cookies.user_sid);
        if (req.isAuthenticated()) {
            console.log("user is authenticated");
            return next();
        }
        console.log("user is not authenticated");
        res.redirect('/#/recipes');
    }
}
exports.Passport = Passport;
