import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = (module.exports = express());

app.use(cors());
app.use(express.json());
dotenv.config();

// readDataFromDB("users").then(console.log).catch(console.error);

app.use("/api", require("./controllers/posts"));

app.listen(process.env.PORT, () => {
  console.log(`Server has started on port ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}/`);
});
