const express = require("express");
const app = (module.exports = express());
var cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

app.use("/api", require("./controllers/posts"));

app.listen(5000, () => {
  console.log("Server has started on port 5000");
  console.log("http://localhost:5000/");
});
