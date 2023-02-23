import { model, Schema, Model } from "mongoose";

interface IGroupChat {
  id: string;
  title: string;
  user_id: string;
  GroupChat_id: string;
  type: string;
  data: string;
  created_at: number;
}

const GroupChatSchema = new Schema<IGroupChat>({
  id: { type: String, unique: true },
  title: String,
  user_id: String,
  GroupChat_id: String,
  type: String,
  data: String,
  created_at: Number
});

const GroupChat: Model<IGroupChat> = model("GroupChat", GroupChatSchema);

export default GroupChat;
