import { Request, Response } from "express";
import { UserInterface } from "../database/model/user";
import UserService from "../database/service/user";

export default {
  async CreateUser(req: Request, res: Response): Promise<void> {
    const data: UserInterface = req.body;
    const user: UserInterface | boolean = await UserService.createUser(data);
    user
      ? res.json({ user })
      : res.status(400).json({ error: "Email Already used" });
  },
};
