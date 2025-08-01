import { createServer } from "http";
import app from "../dist/app";
import mongoose from "mongoose";

let connected = false;

export default async function handler(req: any, res: any) {
  if (!connected) {
    try {
      await mongoose.connect(process.env.DATABASE_URL as string);
      connected = true;
      console.log("✅ Connected to MongoDB");
    } catch (err) {
      console.error("❌ MongoDB connection error:", err);
      res.status(500).json({ message: "Database connection failed" });
      return;
    }
  }

  const server = createServer(app);
  server.emit("request", req, res);
}
