const express = require("express");
const cors = require("cors");
const {
  connectToDB,
  pushDataToDB,
  readDataFromDB,
} = require("./database/mongo.database");
const { MongoClient } = require("mongodb");
const app = (module.exports = express());

require("dotenv").config();

app.use(cors());
app.use(express.json());

readDataFromDB("users").then(console.log).catch(console.error);

app.use("/api", require("./controllers/posts"));

app.listen(5000, () => {
  console.log("Server has started on port 5000");
  console.log("http://localhost:5000/");
});
