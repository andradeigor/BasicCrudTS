import { Request, Response } from "express";
import { UserInterface } from "../database/model/user";
import UserService from "../database/service/user";
export interface UserDeleteInterface extends Document {
  id: string | boolean;
  name: string;
  email: string;
}
export default {
  async CreateUser(req: Request, res: Response): Promise<void> {
    const data: UserInterface = req.body;
    const user: UserInterface | boolean = await UserService.createUser(data);
    user
      ? res.json({ user })
      : res.status(400).json({ error: "Email Already used" });
  },
  async GetUsers(req: Request, res: Response): Promise<void> {
    const user: UserInterface[] | null = await UserService.GetUsers();
    res.json(user);
  },
  async GetUser(req: Request, res: Response): Promise<void> {
    const user: UserInterface | null = await UserService.GetUser(req.body.id);
    user
      ? res.json({ user })
      : res.status(400).json({ error: "User not found!" });
  },
  async DeleteUser(req: Request, res: Response): Promise<void> {
    const data: UserDeleteInterface = req.body;
    data.id = req.params.id ? req.params.id : false;
    const deleted: UserInterface | null = await UserService.DeleteUser(data);
    deleted
      ? res.json(deleted)
      : res.status(400).json({ error: "invalid inputs" });
  },
  async PutUser(req: Request, res: Response): Promise<void> {
    const data: UserDeleteInterface = req.body;
    data.id = req.params.id;
    const newUser: UserInterface | null = await UserService.PutUser(data);
    newUser
      ? res.json(newUser)
      : res.status(400).json({ error: "invalid inputs" });
  },
};
