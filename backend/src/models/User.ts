import mongoose from "mongoose";

const { Schema } = mongoose;
let id = new mongoose.Types.ObjectId();
console.log("id: ", id);

const UserSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  gender: String,
  token: String,
});

const User = mongoose.model("User", UserSchema);

User.createCollection(() => {
  try {
    console.log("Create Collection success!!!");
  } catch (err) {
    console.log("Create Collection error!!!", err);
  }
});

export default User;
