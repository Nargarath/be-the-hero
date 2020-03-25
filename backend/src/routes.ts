import express from "express";
import { connection } from './database/connection';
import crypto from 'crypto';

const routes = express.Router();


routes.post( "/ongs", async ( request , response ) => {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    });

    return response.json({ id });
} );

export default routes;