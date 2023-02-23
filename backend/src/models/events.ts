import { model, Schema, Model } from "mongoose";

interface IEvent {
  id: string;
  chat_id: string;
  data: string;
  updated_at: number;
}

const EventSchema = new Schema<IEvent>({
  id: { type: String, unique: true },
  chat_id: String,
  data: String,
  updated_at: Number
});

const Event: Model<IEvent> = model("Event", EventSchema);

export default Event;
