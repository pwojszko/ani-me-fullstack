import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";
import { connectToMongoDB } from "./database/mongo.database";

const app = (module.exports = express());

app.use(cors());
app.use(express.json());
dotenv.config();
connectToMongoDB();

app.use("/api", userRouter);

app.listen(process.env.PORT, () => {
  console.clear();
  console.log(`Server has started on port ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}/`);
});
