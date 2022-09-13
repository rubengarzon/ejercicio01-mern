"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
// Create the express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.status(200).json({
        data: {
            message: "Goodbye, World!",
        },
    });
});
app.get("/hello/:name?", (req, res) => {
    const { name } = req.params;
    if (!name) {
        res.status(200).json({
            data: {
                message: "Hola, Anónimo!",
            },
        });
    }
    res.status(200).json({
        data: {
            message: `Hola, ${name}!`,
        },
    });
});
// Execute APP and listen the port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map