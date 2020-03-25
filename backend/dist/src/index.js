"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const ong_1 = require("./controllers/ong");
routing_controllers_1.useContainer(typedi_1.Container);
dotenv_1.default.config();
const port = process.env.SERVER_PORT;
const app = routing_controllers_1.createExpressServer({
    routePrefix: "/api",
    controllers: [ong_1.OngController]
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`app working on port: ${port}`);
});
//# sourceMappingURL=index.js.map