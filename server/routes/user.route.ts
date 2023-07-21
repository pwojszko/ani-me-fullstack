import * as userController from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/auth/login", userController.loginOne);
userRouter.post("/auth/register", userController.registerOne);

export default userRouter;
