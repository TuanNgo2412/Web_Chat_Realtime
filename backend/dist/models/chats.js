"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChatSchema = new mongoose_1.Schema({
    id: { type: String, unique: true },
    title: String,
    type: String,
    data: String,
    created_at: Number,
    updated_at: Number
});
const Chat = (0, mongoose_1.model)("Chat", ChatSchema);
exports.default = Chat;
//# sourceMappingURL=chats.js.map