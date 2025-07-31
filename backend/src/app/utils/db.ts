import mongoose from "mongoose";
import { config } from "../config";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(config.database_url as string);
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err;
  }
};
