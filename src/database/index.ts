import mongoose from "mongoose";
import dbConfig from "./config";

const db = mongoose.connect(
  `mongodb://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/admin`
);
console.log(
  `mongodb://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/admin`
);
export default db;
