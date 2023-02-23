import { model, Schema, Model } from "mongoose";

interface IChat {
  id: string;
  title: string;
  type: string;
  data: string;
  created_at: number;
  updated_at: number;
}

const ChatSchema = new Schema<IChat>({
  id: { type: String, unique: true },
  title: String,
  type: String,
  data: String,
  created_at: Number,
  updated_at: Number
});

const Chat: Model<IChat> = model("Chat", ChatSchema);

export default Chat;
