import {Router} from "express";
import passport from 'passport';
import { UserController } from "../Controllers/UserController";
import GooglePassport from "./GooglePassport";
import GooglePassportObj from './GooglePassport';

class Passport {

    public static registerRoutes(recipeRoute: Router, googlePassportObj: GooglePassportObj) {

        
        recipeRoute.get('/auth/google', 
            passport.authenticate('google', {scope: ['profile']}));


        recipeRoute.get('/auth/google/callback', 
            passport.authenticate('google', 
                { failureRedirect: '/' }
            ),
            (req, res) => {
                console.log("successfully authenticated user and returned to callback page.");
                console.log("redirecting to /#/recipes");
                res.redirect('/#/recipes');
            } 
        );
        recipeRoute.get('/auth/user', this.validateAuth, (req, res) => {
            // try get user id from google passport obj
            let ssoId = googlePassportObj.ssoId;
        
            UserController.retrieveUserBySsoId(res, ssoId);

            // Will it still pass any result if directed to index page? No.
        })


    }

    public static validateAuth(req, res, next): void {
        if (req.isAuthenticated()) { console.log("user is authenticated"); return next(); }
        console.log("user is not authenticated");
        res.redirect('/');
    }
}

export {Passport}