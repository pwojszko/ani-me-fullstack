import { Router } from "express";
// import authenticateToken from "../middlewares/auth.middleware";

const postsRouter = Router();

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

postsRouter.get("/posts", (req: any, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

export default postsRouter;
