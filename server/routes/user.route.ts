import * as userController from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/login", userController.loginOne);
userRouter.post("/register", userController.registerOne);

export default userRouter;
