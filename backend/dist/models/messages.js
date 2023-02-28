"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MessageSchema = new mongoose_1.Schema({
    id: { type: String, unique: true },
    user_id: String,
    chat_id: String,
    random_id: String,
    message: String,
    type: String,
    reply_to: {
        message_id: String,
        user_id: String,
    },
    forwarded_from: {
        message_id: String,
        user_id: String,
        chat_id: String,
    },
    is_read: {
        type: Boolean,
        default: false,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
    is_private: {
        type: Boolean,
        required: true,
    },
    is_edited: {
        type: Boolean,
        default: false,
    },
    created_at: Number,
    updated_at: Number,
});
const Message = (0, mongoose_1.model)('Message', MessageSchema);
exports.default = Message;
//# sourceMappingURL=messages.js.map