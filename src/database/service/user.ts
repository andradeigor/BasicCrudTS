import { UserDeleteInterface } from "../../controller/userController";
import { UserModel, UserInterface } from "../model/user";
import Bcrypt from "../../utils/bcrypt";

interface deleted {
  deletedCount: Number;
}
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
    const user: UserInterface | null = await UserModel.findOne({
      where: { id },
    });
    return user;
  },
  async DeleteUser(data: UserDeleteInterface) {
    const user: deleted = await UserModel.deleteOne({ id: data.id });
    return user.deletedCount > 0 ? true : false;
  },
  async PutUser(data: UserDeleteInterface) {
    const newUser: UserInterface | null = await UserModel.findOneAndUpdate(
      { id: data.id },
      data
    );
    return newUser;
  },
};
