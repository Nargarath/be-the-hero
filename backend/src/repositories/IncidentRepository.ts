import {Service} from "typedi";
import { Incident } from "../models/Incident"
import crypto from "crypto";
import {connection} from "../database/connection";

@Service()
export class IncidentRepository {
    private incidents: Incident[] = [];
    private lastIncidentFetched: Incident = null;

    async save(title?: string, description?: string, value?: number,ong_id?: string) {
        const incident  = new Incident(title,description,value,ong_id).toJSON();
        await connection('incidents').insert(incident);
        return incident.id;
    }

    async fetchOne(id: string) {
        this.lastIncidentFetched = await connection('incidents').where('id', id).first();
        return this.lastIncidentFetched;
    }

    async fetchAll() {
        this.incidents = await connection('incidents').select('*');
        return this.incidents;
    }

}