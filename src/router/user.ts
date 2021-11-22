import Router from "express";
import userController from "../controller/userController";
import UserMiddleware from "../middleware/user";
const router = Router();

router.post("/", UserMiddleware.CreateUserMiddle, userController.CreateUser);
router.get("/", userController.GetUsers);
router.get("/:id", UserMiddleware.GetUserMiddle, userController.GetUser);

export default router;
