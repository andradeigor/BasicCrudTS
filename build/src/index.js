"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./router/user"));
const index_1 = __importDefault(require("./database/index"));
const app = (0, express_1.default)();
const PORT = 8000;
(0, index_1.default)();
app.use("/user", user_1.default);
app.listen(PORT, () => {
    console.log(`🔥 Hi, I'm running at http://localhost:${PORT}/.`);
});
