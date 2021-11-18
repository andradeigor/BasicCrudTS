import express from "express";
import UserRouter from "./router/user";
const app = express();
const PORT: number = 8000;
import mongoose from "mongoose";
import dbConfig from "./database/config";

const db = mongoose.connect(
  `mongodb://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/admin`
);

export default db;
app.use("/user", UserRouter);

app.listen(PORT, (): void => {
  console.log(`🔥 Hi, I'm running at http://localhost:${PORT}/.`);
});
