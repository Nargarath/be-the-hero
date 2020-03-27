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
const OngController_1 = require("./controllers/OngController");
const IncidentController_1 = require("./controllers/IncidentController");
const ProfileController_1 = require("./controllers/ProfileController");
const SessionController_1 = require("./controllers/SessionController");
routing_controllers_1.useContainer(typedi_1.Container);
dotenv_1.default.config();
const port = process.env.SERVER_PORT;
const app = routing_controllers_1.createExpressServer({
    routePrefix: "/api",
    cors: true,
    controllers: [
        OngController_1.OngController,
        IncidentController_1.IncidentController,
        ProfileController_1.ProfileController,
        SessionController_1.SessionController
    ]
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`app working on port: ${port}`);
});
//# sourceMappingURL=index.js.map