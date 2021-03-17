import express, {Request, Response} from "express";
import {Router} from "express";
import {UserController} from '../Controllers/UserController';
import {UserModel} from '../Models/UserModel';

class UserRoute{

    public static registerRoutes(userRoute: Router) {

        userRoute.get("/api/user/:id", UserController.retrieveUserByID);
        userRoute.put("/api/user/:id", UserController.updateUser);
    }


}

export{UserRoute};