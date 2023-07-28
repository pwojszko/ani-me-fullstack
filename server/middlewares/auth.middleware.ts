import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { User } from "../models/user.model";

dotenv.config();

export const SECRET_KEY: Secret = process.env.ACCESS_TOKEN_SECRET!;

export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  jwt.verify(token!, process.env.ACCESS_TOKEN_SECRET!, (err, decoded: any) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token." });
    }

    req.body.userId = decoded?.userId;
    next();
  });
}
