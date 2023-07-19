const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
  console.log("http://localhost:5000/");
});
