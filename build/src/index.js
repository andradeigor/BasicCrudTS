"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8000;
app.get("/", (req, res) => {
    res.json({ message: "hellor word" });
});
app.listen(PORT, () => {
    console.log(`🔥 Hi, I'm running at http://localhost:${PORT}/.`);
});
