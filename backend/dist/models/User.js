"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
let id = new mongoose_1.default.Types.ObjectId();
console.log("id: ", id);
const UserSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    gender: String,
    token: String,
});
const User = mongoose_1.default.model("User", UserSchema);
User.createCollection(() => {
    try {
        console.log("Create Collection success!!!");
    }
    catch (err) {
        console.log("Create Collection error!!!", err);
    }
});
exports.default = User;
//# sourceMappingURL=User.js.map