import "reflect-metadata";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { Container } from "typedi";
import {useExpressServer, useContainer, createExpressServer} from "routing-controllers";
import { OngController } from "./controllers/OngController";
import { IncidentController } from "./controllers/IncidentController";


useContainer(Container);

dotenv.config();

const port = process.env.SERVER_PORT;

const app = createExpressServer({
    routePrefix: "/api",
    controllers: [
        OngController,
        IncidentController
    ]
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log(`app working on port: ${port}`)
} );

