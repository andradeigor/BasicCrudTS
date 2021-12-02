import { UserDeleteInterface } from "../../controller/userController";
import { UserModel, UserInterface } from "../model/user";
import { isValidObjectId } from "mongoose";
import Bcrypt from "../../utils/bcrypt";

export default {
  async createUser(data: UserInterface) {
    const hasUser: UserInterface | null = await UserModel.findOne({
      email: data.email,
    });
    if (hasUser) {
      return false;
    }
    const password: string = await Bcrypt.encrypt(data.password);
    const user: UserInterface = await UserModel.create({
      email: data.email,
      name: data.name,
      password,
    });
    return user;
  },
  async GetUsers() {
    const users: UserInterface[] | null = await UserModel.find();
    return users;
  },
  async GetUser(id: string) {
    if (!isValidObjectId(id)) {
      return false;
    }
    const user: UserInterface | null = await UserModel.findById(id);
    return user;
  },
  async DeleteUser(data: UserDeleteInterface) {
    const user: UserInterface | null = await UserModel.findByIdAndRemove(
      data.id
    );
    return user;
  },
  async PutUser(data: UserDeleteInterface) {
    if (!isValidObjectId(data.id)) {
      return false;
    }
    const newUser: UserInterface | null = await UserModel.findByIdAndUpdate(
      data.id,
      data,
      { new: true }
    );
    return newUser;
  },
};
