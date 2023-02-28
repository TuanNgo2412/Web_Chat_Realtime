"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    id: { type: String, unique: true },
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    gender: Number,
    token: { type: String, unique: true },
    created_at: Number,
    updated_at: Number
});
const User = (0, mongoose_1.model)("User", UserSchema);
// User.create({
//   username: "Tuan Ngo",
//   password: "abcdef",
//   firstname: "Tuan",
//   lastname: "Ngo",
//   gender: 1,
//   token: "asdasfqwe123sada@hadaw"
// }).then((data) => {
//   console.log("schema: ", data);
// });
exports.default = User;
//# sourceMappingURL=users.js.map