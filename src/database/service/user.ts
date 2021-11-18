import { UserModel, UserInterface } from "../model/user";
import Bcrypt from "../../utils/bcrypt";
export default {
  async createUser(data: UserInterface) {
    const hasUser: any = await UserModel.findOne({ email: data.email });
    if (hasUser) {
      return false;
    }
    const password: string = await Bcrypt.encrypt(data.password);
    const user: any = UserModel.create({
      email: data.email,
      name: data.name,
      password,
    });
    user.password = undefined;
    return user;
  },
};
