import Router from "express";
import userController from "../controller/userController";
import UserMiddleware from "../middleware/user";
const router = Router();

router.post("/", UserMiddleware.CreateUserMiddle, userController.CreateUser);
router.get("/", userController.GetUsers);
router.get("/:id", UserMiddleware.GetUserMiddle, userController.GetUser);
router.delete("/:id", UserMiddleware.GetUserMiddle, userController.DeleteUser);
router.put("/:id", UserMiddleware.PutUserMiddle, userController.PutUser);

export default router;
