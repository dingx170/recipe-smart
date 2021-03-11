"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterModel = void 0;
const mongoose_1 = require("mongoose");
const DataAccess_1 = require("../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class CounterModel {
    static createSchema() {
        if (this.schema) {
            return;
        }
        this.schema = new mongoose_1.Schema({
            name: String,
            count: Number,
        }, { collection: 'counter' });
    }
    static createModel() {
        if (this.model) {
            return;
        }
        this.model = mongooseConnection.model("Counter", this.schema);
    }
}
exports.CounterModel = CounterModel;
CounterModel.createSchema();
CounterModel.createModel();
