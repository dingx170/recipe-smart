"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const UserController_1 = require("../Controllers/UserController");
class UserRoute {
    static registerRoutes(userRoute) {
        // 2. get requests and pass to controller
        userRoute.get("/api/user/:id", UserController_1.UserController.retrieveUserByID);
        // userRoute.get("/user/", UserController.retrieveUser);
        userRoute.post("/api/user", UserController_1.UserController.createUser);
        userRoute.put("/api/user/:id", UserController_1.UserController.updateUser);
        userRoute.post("/api/login", UserController_1.UserController.logincheck);
        userRoute.get("/api/login", UserController_1.UserController.getSession);
        userRoute.get("/api/validation", UserController_1.UserController.validateNameEmail);
    }
}
exports.UserRoute = UserRoute;
