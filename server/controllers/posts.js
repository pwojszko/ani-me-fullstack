const router = require("express").Router();

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

router.get("/posts", (req, res) => {
  res.json(posts);
});

module.exports = router;
