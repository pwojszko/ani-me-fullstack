import * as userController from "../controllers/user.controller";
import { auth } from "../middlewares/auth.middleware";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/auth/login", userController.login);
userRouter.post("/auth/register", userController.register);
userRouter.get("/watched", auth, userController.getWatchedList);
userRouter.post("/watched/add", auth, userController.addWatched);
userRouter.post("/watched/remove", auth, userController.removeWatched);
userRouter.post("/watched/rate", auth, userController.rateWatched);

export default userRouter;
