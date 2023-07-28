import { Request, Response } from "express";
import { getErrorMessage } from "../utils/errors.util";
import * as services from "../services/user.service";

export const login = async (req: Request, res: Response) => {
  try {
    const foundUser = await services.loginService(req.body);
    //console.log('found user', foundUser.token);
    res.status(200).send(foundUser);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    await services.registerService(req.body);
    res.status(200).send("Inserted successfully");
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

export const getWatchedList = async (req: Request, res: Response) => {
  try {
    const watchedList = await services.getWatchedListService(req.body.userId);
    res.status(200).send(watchedList);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

export const addWatched = async (req: Request, res: Response) => {
  try {
    await services.addWatchedService(req.body);
    res.status(200).send({ message: "Added successfully" });
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

export const removeWatched = async (req: Request, res: Response) => {
  try {
    await services.removeWatchedService(req.body);
    res.status(200).send("Removed successfully");
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

export const rateWatched = async (req: Request, res: Response) => {
  try {
    await services.rateWatchedService(req.body);
    res.status(200).send("Rate updated successfully");
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};
