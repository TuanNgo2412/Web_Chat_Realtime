import mongoose from "mongoose";

import config from "./config";

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUrl);
    console.log(`Connect database successful: ${conn.connection.host}`);
  } catch (err) {
    console.log("Connect error!!!", err);
  }
};

export { connectDB };
