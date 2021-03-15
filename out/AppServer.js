"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
let appServer = new App_1.App().expApp;
const port = 8080; // default port to listen
// start Express server
appServer.listen(process.env.PORT || port, () => {
    console.log("Server is running.");
});
// appServer.listen(port, () => {
//     console.log("Server is running.");
// });
