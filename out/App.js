"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors")); // TO-DO try delete
const passport_1 = __importDefault(require("passport"));
const GooglePassport_1 = __importDefault(require("./Passport/GooglePassport"));
const RecipeRoute_1 = require("./Routes/RecipeRoute");
const UserRoute_1 = require("./Routes/UserRoute");
const MealplanRoute_1 = require("./Routes/MealplanRoute");
const MyRecipeRoute_1 = require("./Routes/MyRecipeRoute");
const Passport_1 = require("./Passport/Passport");
var session = require('express-session');
var FileStore = require('session-file-store')(session);
class App {
    // run config methods
    constructor() {
        this.googlePassportObj = new GooglePassport_1.default();
        this.expApp = express_1.default();
        this.setupMiddleware();
        this.setupFrontEnd();
        this.setupRoutes();
    }
    // config middleware
    setupMiddleware() {
        this.expApp.use(bodyParser.json({ limit: '50mb' }));
        this.expApp.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
        this.expApp.use(session({
            name: 'skey',
            secret: 'recipesmart',
            store: new FileStore(),
            saveUninitialized: false,
            resave: false,
            cookie: {
                maxAge: 10 * 1000 // expiration time in mili
            }
        }));
        // this.expApp.use(cookieParser());
        this.expApp.use(passport_1.default.initialize());
        this.expApp.use(passport_1.default.session());
        this.expApp.use(cors_1.default()); // TO-DO try delete
    }
    // config front end 
    setupFrontEnd() {
        this.expApp.use('/', express_1.default.static(__dirname + '/dist/recipe-smart-client'));
    }
    // config API endpoints
    setupRoutes() {
        let router = express_1.default.Router();
        // 1. register routes
        RecipeRoute_1.RecipeRoute.registerRoutes(router);
        MyRecipeRoute_1.MyRecipeRoute.registerRoutes(router);
        UserRoute_1.UserRoute.registerRoutes(router);
        MealplanRoute_1.MealplanRoute.registerMealplanRoutes(router);
        Passport_1.Passport.registerRoutes(router, this.googlePassportObj);
        this.expApp.use('/', router);
    }
}
exports.App = App;
