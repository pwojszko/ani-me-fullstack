import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 8;

export type User = mongoose.Document & {
  name: string;
  email: string;
  password: string;
};

const UserSchema: mongoose.Schema<User> = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
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
