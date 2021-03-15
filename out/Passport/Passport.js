"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passport = void 0;
const passport_1 = __importDefault(require("passport"));
const UserController_1 = require("../Controllers/UserController");
class Passport {
    static registerRoutes(recipeRoute, googlePassportObj) {
        recipeRoute.get('/auth/google', passport_1.default.authenticate('google', { scope: ['profile'] }));
        recipeRoute.get('/auth/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/' }), (req, res) => {
            console.log("successfully authenticated user and returned to callback page.");
            console.log("redirecting to /#/recipes");
            res.redirect('/#/recipes');
        });
        recipeRoute.get('/auth/user', this.validateAuth, (req, res) => {
            // try get user id from google passport obj
            let ssoId = googlePassportObj.ssoId;
            UserController_1.UserController.retrieveUserBySsoId(res, ssoId);
            // Will it still pass any result if directed to index page? No.
        });
    }
    static validateAuth(req, res, next) {
        if (req.isAuthenticated()) {
            console.log("user is authenticated");
            return next();
        }
        console.log("user is not authenticated");
        res.redirect('/');
    }
}
exports.Passport = Passport;
