"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GroupChatSchema = new mongoose_1.Schema({
    id: { type: String, unique: true },
    title: String,
    user_id: String,
    GroupChat_id: String,
    type: String,
    data: String,
    created_at: Number
});
const GroupChat = (0, mongoose_1.model)("GroupChat", GroupChatSchema);
exports.default = GroupChat;
//# sourceMappingURL=group_chats.js.map