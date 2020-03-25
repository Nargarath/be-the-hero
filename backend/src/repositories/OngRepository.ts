import {Service} from "typedi";
import { OngModel } from "../models/OngModel";
import crypto from "crypto";
import {connection} from "../database/connection";

@Service()
export class OngRepository {
    private ongs: OngModel[] = [];
    private lastOngFetched: OngModel = null;

    async save(name: string, email: string, whatsapp: string,city: string,uf: string) {
        const ong  = new OngModel(name,email,whatsapp,city,uf).toJSON();
        await connection('ongs').insert(ong);
        return ong.id;
    }

    async fetchOne(id: string) {
        this.lastOngFetched = await connection('ongs').where('id', id).first();
        return this.lastOngFetched;
    }

    async fetchAll() {
        this.ongs = await connection('ongs').select('*');
        return this.ongs;
    }

}