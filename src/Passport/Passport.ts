import {Router} from "express";
import passport from 'passport';
import { UserController } from "../Controllers/UserController";
import GooglePassport from "./GooglePassport";
import GooglePassportObj from './GooglePassport';

let logout = require('express-passport-logout');
class Passport {


    public static registerRoutes(recipeRoute: Router, googlePassportObj: GooglePassportObj) {

        
        recipeRoute.get('/auth/google', 
            passport.authenticate('google', {scope: ['profile', 'email']}));
            // req.session.loginUser = ans.user_id;


        recipeRoute.get('/auth/google/callback', 
            passport.authenticate('google', 
                { failureRedirect: '/' }
            ),
            (req, res) => {
                console.log("successfully authenticated user and returned to callback page.");
                console.log("redirecting to /#/recipes");
                console.log('Prining sso id from google in line 26: ' + googlePassportObj.ssoId);
                res.redirect('/#/');
            } 
        );
        recipeRoute.get('/auth/user', this.validateAuth, (req, res) => {
            // try get user id from google passport obj
            let ssoId: any = googlePassportObj.ssoId;
            
            // try get user id from google passport obj
            UserController.retrieveUserBySsoId(res, ssoId);

            // Will it still pass any result if directed to index page? No.
        });

        recipeRoute.get('/logout', (req, res) =>{
            // googlePassportObj.clientEmail = "";
            logout();
            return res.redirect("/#/recipes");
        })


    }

    public static validateAuth(req, res, next): void {
        //console.log("req.cookies.user_sid: " + req.cookies.user_sid);
        if (req.isAuthenticated()) { console.log("user is authenticated"); return next(); }
        console.log("user is not authenticated");
        res.redirect('../');
    }
}

export {Passport}