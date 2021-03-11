import {App} from './App';

let appServer: any = new App().expApp;

const port : number = 8080; // default port to listen

// start Express server
appServer.listen(process.env.PORT || 8080, () => {
    console.log("Server is running.");
});
