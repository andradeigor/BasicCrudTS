import Router from "express";
import { UserModel, UserInterface } from "../database/model/user";
const router = Router();

router.get("/", async (req, res) => {
  const user: UserInterface = await UserModel.create({
    email: "ig.vp@hotmail.com",
    name: "iguinho",
    password: "aloaalo",
  });
  res.json(user);
});

export default router;
