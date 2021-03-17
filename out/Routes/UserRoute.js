"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const UserController_1 = require("../Controllers/UserController");
class UserRoute {
    static registerRoutes(userRoute) {
        userRoute.get("/api/user/:id", UserController_1.UserController.retrieveUserByID);
        userRoute.put("/api/user/:id", UserController_1.UserController.updateUser);
    }
}
exports.UserRoute = UserRoute;
