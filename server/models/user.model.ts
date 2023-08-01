import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 8;

export type User = mongoose.Document & {
  name: string;
  email: string;
  password: string;
  watched: {
    id: string;
    rate: number;
  }[];
};

const UserSchema: mongoose.Schema<User> = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  watched: {
    type: [
      {
        id: { type: String },
        rate: { type: Number, min: 1, max: 5 },
      },
    ],
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }
  next();
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
