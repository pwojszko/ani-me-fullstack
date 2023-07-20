import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import mongoose from "mongoose";

require("dotenv").config();

export async function connectToMongoDB() {
  if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  }
}
