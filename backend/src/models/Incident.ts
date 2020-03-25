import crypto from "crypto";
import {connection} from "../database/connection";
import {IsEmail} from "class-validator";

export class Incident {
    id?: number;
    title: string;
    description: string;
    value: number;
    ong_id: string;

    constructor(title?: string, description?: string, value?: number,ong_id?: string, id?: number) {
        this.id = id ? id : null;
        this.title = title;
        this.description = description;
        this.value = value;
        this.ong_id = ong_id;
    }

    toJSON() {
        const incident = {
            id: this.id,
            title: this.title,
            description: this.description,
            value: this.value,
            ong_id: this.ong_id
        };
        if (!this.id) {delete incident.id;}
        return incident;
    }
}