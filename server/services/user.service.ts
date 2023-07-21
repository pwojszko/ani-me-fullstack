import UserModel, { User } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function register(user: User): Promise<void> {
  try {
    await UserModel.create(user);
  } catch (error) {
    throw error;
  }
}

export async function login(user: User) {
  try {
    const foundUser = await UserModel.findOne({ name: user.name });

    if (!foundUser) {
      throw new Error("Name of user is not correct");
    }

    const isMatch = bcrypt.compareSync(user.password, foundUser.password);

    if (isMatch) {
      const token = jwt.sign(
        { _id: foundUser._id?.toString(), name: foundUser.name },
        process.env.ACCESS_TOKEN_SECRET || "",
        {
          expiresIn: "2 days",
        }
      );

      return {
        user: { _id: foundUser._id?.toString(), name: foundUser.name },
        token: token,
      };
    } else {
      throw new Error("Password is not correct");
    }
  } catch (error) {
    throw error;
  }
}