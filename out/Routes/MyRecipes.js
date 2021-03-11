"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myRecipesRoute = void 0;
const express_1 = __importDefault(require("express"));
let myRecipesRoute = express_1.default.Router();
exports.myRecipesRoute = myRecipesRoute;
// view all recipes
myRecipesRoute.get("/", (req, res) => {
    res.send("Here are all my recipes!");
    console.log("View all recipes");
});
// view one recipe
myRecipesRoute.get("/:id", (req, res) => {
    res.send("Here is the recipe with id of " + req.params.id);
    console.log("View one recipe");
});
// post one recipe
myRecipesRoute.post("/", (req, res) => {
    res.send(req.body);
    console.log("Post one recipe");
});
// update one recipe
myRecipesRoute.put("/:id", (req, res) => {
    res.send("Updated the recipe with id of " + req.params.id);
    console.log("Update one recipe");
});
// delete one recipe
myRecipesRoute.delete("/:id", (req, res) => {
    res.send("Deleted the recipe with id of " + req.params.id);
    console.log("Delete one recipe");
});
