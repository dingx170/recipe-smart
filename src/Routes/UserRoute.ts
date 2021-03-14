import express, {Request, Response} from "express";
import {Router} from "express";
import {UserController} from '../Controllers/UserController';
import {UserModel} from '../Models/UserModel';

class UserRoute{

    public static registerRoutes(userRoute: Router) {

        // 2. get requests and pass to controller
        userRoute.get("/api/user/:id", UserController.retrieveUserByID);

        // userRoute.get("/user/", UserController.retrieveUser);
        
        userRoute.post("/api/user", UserController.createUser);

        userRoute.put("/api/user/:id", UserController.updateUser);

        userRoute.post("/api/login", UserController.logincheck);

        userRoute.get("/api/login", UserController.getSession);

        userRoute.get("/api/validation", UserController.validateNameEmail);
    }


}

export{UserRoute};