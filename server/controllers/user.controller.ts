import { Request, Response } from "express";
import { getErrorMessage } from "../utils/errors.util";
import { login, register } from "../services/user.service";

export const loginOne = async (req: Request, res: Response) => {
  try {
    const foundUser = await login(req.body);
    //console.log('found user', foundUser.token);
    res.status(200).send(foundUser);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

export const registerOne = async (req: Request, res: Response) => {
  try {
    await register(req.body);
    res.status(200).send("Inserted successfully");
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};
