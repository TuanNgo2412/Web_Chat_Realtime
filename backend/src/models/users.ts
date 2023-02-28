import { model, Schema, Model } from 'mongoose';

interface IUser {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  gender: number;
  token: string;
  created_at: number;
  updated_at: number;
}

const UserSchema = new Schema<IUser>({
  id: { type: String, unique: true },
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  gender: Number,
  token: { type: String, unique: true },
  created_at: Number,
  updated_at: Number,
});

const User: Model<IUser> = model('User', UserSchema);

export default User;
