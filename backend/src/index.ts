import "reflect-metadata";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { Container } from "typedi";
import {useExpressServer, useContainer, createExpressServer} from "routing-controllers";
import { OngController } from "./controllers/OngController";
import { IncidentController } from "./controllers/IncidentController";
import {ProfileController} from "./controllers/ProfileController";
import {SessionController} from "./controllers/SessionController";


useContainer(Container);

dotenv.config();

const port = process.env.SERVER_PORT;

const app = createExpressServer({
    routePrefix: "/api",
    cors: true,
    controllers: [
        OngController,
        IncidentController,
        ProfileController,
        SessionController
    ]
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log(`app working on port: ${port}`)
} );

