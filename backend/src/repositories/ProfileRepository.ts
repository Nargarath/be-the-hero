import {Service} from "typedi";
import { Incident } from "../models/Incident"
import crypto from "crypto";
import {connection} from "../database/connection";

@Service()
export class ProfileRepository {
    private incidents: Incident[] = [];
    private lastIncidentFetched: Incident = null;

    async incidentsFromOng(ong_id: string) {
        this.incidents  = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');
        return this.incidents;
    }


}