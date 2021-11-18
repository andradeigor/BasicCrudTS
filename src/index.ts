import express from "express";

const app = express();
const PORT: number = 8000;

app.get("/", (req, res): void => {
  res.json({ message: "hellor word" });
});

app.listen(PORT, (): void => {
  console.log(`🔥 Hi, I'm running at http://localhost:${PORT}/.`);
});
