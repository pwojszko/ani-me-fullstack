const express = require("express");
const app = express();
var cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

const posts = [
  {
    username: "Kyle",
    title: "Post 1",
  },
  {
    username: "Jim",
    title: "Post 2",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  // auth user
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
  console.log("http://localhost:5000/");
});
