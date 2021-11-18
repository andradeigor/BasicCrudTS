import Router, { Request, Response } from "express";
import { UserModel, UserInterface } from "../database/model/user";
const router = Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  const users: UserInterface[] = await UserModel.find();
  res.json(users);
});

export default router;
