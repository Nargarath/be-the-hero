import crypto from "crypto";
import {connection} from "../database/connection";
import {IsEmail} from "class-validator";

export class OngModel {
    id?: string;
    name: string;
    @IsEmail()
    email: string;
    whatsapp: string;
    city: string;
    uf: string;

    constructor(name?: string, email?: string, whatsapp?: string,city?: string,uf?: string, id?: string) {
        this.id = id ? id : this.idGenerate();
        this.name = name;
        this.email = email;
        this.whatsapp = whatsapp;
        this.city = city;
        this.uf = uf;
    }

    idGenerate() {
        return crypto.randomBytes(4).toString('HEX');
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            whatsapp: this.whatsapp,
            city: this.city,
            uf: this.uf
        };
    }
}