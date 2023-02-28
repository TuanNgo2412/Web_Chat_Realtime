import { model, Schema, Model } from 'mongoose';

interface IMessage {
  id: string;
  user_id: string;
  chat_id: string;
  random_id: string;
  message: string;
  type: string;
  reply_to: {
    message_id: string;
    user_id: string;
  };
  forwarded_from: {
    message_id: string;
    user_id: string;
    chat_id: string;
  };
  is_read: boolean;
  is_deleted: boolean;
  is_private: boolean;
  is_edited: boolean;
  created_at: number;
  updated_at: number;
}

const MessageSchema: Schema<IMessage> = new Schema<IMessage>({
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

const Message: Model<IMessage> = model('Message', MessageSchema);

export default Message;
