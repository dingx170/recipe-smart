import express, { Application } from "express";
import * as bodyParser from 'body-parser';
import cors from "cors";
import { RecipeRoute } from './Routes/RecipeRoute';
import { UserRoute } from "./Routes/UserRoute";
import { MealplanRoute } from "./Routes/MealplanRoute"
import { MyRecipeRoute } from "./Routes/MyRecipeRoute";

var session = require('express-session');
var FileStore = require('session-file-store')(session);

class App {

    public expApp: Application;

    // run config methods
    constructor() {
        this.expApp = express();
        this.setupMiddleware();
        this.setupFrontEnd();
        this.setupRoutes();
    }

    // config middleware
    private setupMiddleware(): void {
        this.expApp.use(bodyParser.json({ limit: '50mb' }));
        this.expApp.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
        this.expApp.use(session({
            name: 'skey',
            secret: 'recipesmart',  // signature for session id
            store: new FileStore(),  // local session storage
            saveUninitialized: false,  
            resave: false,  
            cookie: {
                maxAge: 10 * 1000  // expiration time in mili
            }
        }));

        this.expApp.use(cors());
    }

    // config front end 
    private setupFrontEnd(): void {
        this.expApp.use('/', express.static(__dirname + '/dist/recipe-smart-client'));
    }

    // config API endpoints
    private setupRoutes(): void {
        let router =  express.Router();

        // 1. register routes
        RecipeRoute.registerRoutes(router);
        MyRecipeRoute.registerRoutes(router);
        UserRoute.registerRoutes(router);
        MealplanRoute.registerMealplanRoutes(router);

        this.expApp.use('/', router);
        
    }
}

export {App}