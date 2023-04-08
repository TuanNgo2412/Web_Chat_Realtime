import { model, Schema, Model } from 'mongoose';

interface IUser {
    id: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    gender: number;
    accesstoken: string;
    refreshtoken: string;
    created_at: number;
    updated_at: number;
}

const UserSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    gender: { type: Number, required: true },
    accesstoken: {
        type: String,
        required: false,
        index: true,
        unique: true,
        sparse: true,
    },
    refreshtoken: {
        type: String,
        required: false,
        index: true,
        unique: true,
        sparse: true,
    },
    created_at: Number,
    updated_at: Number,
});

const User: Model<IUser> = model('User', UserSchema);

export default User;
