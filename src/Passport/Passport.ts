import {Router} from "express";
import * as passport from 'passport';

class Passport {

    public static registerRoutes(recipeRoute: Router) {

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
    }

    public static validateAuth(req, res, next): void {
        if (req.isAuthenticated()) { console.log("user is authenticated"); return next(); }
        console.log("user is not authenticated");
        res.redirect('/');
    }
}

export {Passport}