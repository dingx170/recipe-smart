import mongoose from "mongoose"

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: mongoose.Connection;
    static DB_CONNECTION_STRING: string = "mongodb+srv://dbAdmin:recipesmart@cluster0.0d86q.mongodb.net/recipeSmartDB?retryWrites=true&w=majority";//'mongodb://localhost:27017/testDB'; 

    constructor() {
        DataAccess.connect();
    }

    static connect(): mongoose.Connection {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }

        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to MongoDB");
        })
        mongoose.set('useCreateIndex', true);
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useUnifiedTopology', true);    
        this.mongooseInstance = mongoose.connect(this.DB_CONNECTION_STRING);

        return this.mongooseInstance;
    }
}

DataAccess.connect();
export {DataAccess};