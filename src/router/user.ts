import Router from "express";
import userController from "../controller/userController";
import UserMiddleware from "../middleware/user";
const router = Router();

router.post("/", UserMiddleware.CreateUserMiddle, userController.CreateUser);

export default router;
