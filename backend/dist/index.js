"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const port = process.env.SERVER_PORT;
const app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(port);
//# sourceMappingURL=index.js.map