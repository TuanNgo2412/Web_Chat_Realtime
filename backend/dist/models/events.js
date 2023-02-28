"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EventSchema = new mongoose_1.Schema({
    id: { type: String, unique: true },
    chat_id: String,
    data: String,
    updated_at: Number
});
const Event = (0, mongoose_1.model)("Event", EventSchema);
exports.default = Event;
//# sourceMappingURL=events.js.map