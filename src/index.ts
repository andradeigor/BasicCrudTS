import express from "express";
import UserRouter from "./router/user";
import db from "./database/index";
const app = express();
const PORT: number = 8000;
db();
app.use(express.json());
app.use("/user", UserRouter);
app.listen(PORT, (): void => {
  console.log(`🔥 Hi, I'm running at http://localhost:${PORT}/.`);
});
