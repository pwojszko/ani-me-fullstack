import UserModel, { User } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function registerService(user: User): Promise<void> {
  try {
    await UserModel.create(user);
  } catch (error) {
    throw error;
  }
}

export async function loginService(user: User) {
  try {
    const foundUser = await UserModel.findOne({ email: user.email });

    if (!foundUser) {
      throw new Error("Email is not correct");
    }

    const isMatch = bcrypt.compareSync(user.password, foundUser.password);

    if (isMatch) {
      const token = jwt.sign(
        { userId: foundUser._id?.toString() },
        process.env.ACCESS_TOKEN_SECRET!,
        {
          expiresIn: "2 days",
        }
      );

      return {
        token: token,
      };
    } else {
      throw new Error("Password is not correct");
    }
  } catch (error) {
    throw error;
  }
}

export async function getWatchedListService(userId: string) {
  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user.watched;
  } catch (error) {
    throw error;
  }
}

export async function addWatchedService(req: {
  userId: number;
  animeId: number;
}) {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      throw new Error("User not found");
    }

    const isWatched = user.watched.find(
      (watched) => watched.id === req.animeId
    );

    if (!isWatched) {
      return user.updateOne({
        $push: {
          watched: {
            id: req.animeId,
          },
        },
      });
    } else {
      throw new Error("Anime is already watched");
    }
  } catch (error) {
    throw error;
  }
}

export async function removeWatchedService(req: {
  userId: number;
  animeId: number;
}) {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      throw new Error("User not found");
    }

    const isWatched = user.watched.find(
      (watched) => watched.id === req.animeId
    );

    if (!isWatched) {
      throw new Error("Anime is not watched yet");
    }

    return user.updateOne({
      $pull: {
        watched: {
          id: req.animeId,
        },
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function rateWatchedService(req: {
  userId: number;
  animeId: number;
  rate: number;
}) {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      throw new Error("User not found");
    }

    const isWatched = user.watched.find(
      (watched) => watched.id === req.animeId
    );

    if (!isWatched) {
      throw new Error("Anime is not watched yet");
    }

    return UserModel.findById(req.userId).then((user) => {
      const watchedIndex = user?.watched
        .map((watchedItem) => watchedItem.id)
        .indexOf(req.animeId);

      user!.watched[watchedIndex!].rate = req.rate;
      user!.save();
    });
  } catch (error) {
    throw error;
  }
}
