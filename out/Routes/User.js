"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const UserController_1 = require("../Controllers/UserController");
// let userRoute = express.Router();
// let users = UserModel.getInstance();
// //retrive user from given userId
// userRoute.get("/:id", (req : Request, res : Response) => {
//     let id = req.params.id;
//     console.log('Query single list with uid: ' + id);
//     users.retrieveUserByID(res, id);
//     console.log("executed retrieve user by id");
// });
// // retrieve user from given email
// userRoute.get("/", (req : Request, res : Response) => {
//     let filter = req.query.body;
//     users.retrieveUser(res, {filter});
//     console.log("executed retrieve user by condition");
// });
// // create a new user
// userRoute.post("/", (req : Request, res : Response) => {
// 	console.log(req.body);
// 	users.createUser(req.body, res);
// 	console.log("executed create user");
// });
// //update user info
// userRoute.put("/:id", (req : Request, res : Response) =>{
// 	users.updateUser(req.params.id, req.body, res);
// 	console.log("updated user");
// });
// export {userRoute};
class UserRoute {
    static registerRoutes(userRoute) {
        // 2. get requests and pass to controller
        userRoute.get("/user/:id", UserController_1.UserController.retrieveUserByID);
        userRoute.get("/user/", UserController_1.UserController.retrieveUser);
        userRoute.post("/user/", UserController_1.UserController.createUser);
        userRoute.put("/user/:id", UserController_1.UserController.updateUser);
    }
}
exports.UserRoute = UserRoute;
