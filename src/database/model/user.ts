import { Model, Schema, model } from "mongoose";

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
