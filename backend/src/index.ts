import express from "express";
import dotenv from "dotenv";


dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.get( "/", ( request , response ) => {
    return response.json( {
        evento: 'semana omnistack'
    });
} );

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );