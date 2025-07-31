import { NowRequest, NowResponse } from "@vercel/node";
import app from "../src/app";
import { connectDB } from "../src/app/utils/db";

export default async function handler(req: NowRequest, res: NowResponse) {
  await connectDB();
  app(req as any, res as any);
}
