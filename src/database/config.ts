import dotenv from "dotenv";

dotenv.config();

export default {
  host: process.env.DATA_HOST,
  username: process.env.DATA_USER,
  password: process.env.DATA_PASS,
  port: process.env.DATA_PORT,
};
