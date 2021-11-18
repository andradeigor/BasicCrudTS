import express from "express";
const app = express();
const PORT = 8000;
app.get("/", (req, res) => {
    res.json({ message: "hellor word" });
});
app.listen(PORT, () => {
    console.log(`🔥 Hi, I'm running at http://localhost:${PORT}/.`);
});
