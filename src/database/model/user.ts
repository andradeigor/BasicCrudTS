import { Model, Schema, model } from "mongoose";
import connection from "../index";

export interface UserInterface {
  email: string;
  name: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel: Model<UserInterface> = model("User", UserSchema);
