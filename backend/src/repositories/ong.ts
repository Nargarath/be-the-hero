import {Service} from "typedi";
import { Ong } from "../models/ong";
import crypto from "crypto";
import {connection} from "../database/connection";

@Service()
export class OngRepository {
    private ongs: Ong[] = [];
    private lastOngFetched: Ong = null;

    async save(name: string, email: string, whatsapp: string,city: string,uf: string) {
        const ong  = new Ong(name,email,whatsapp,city,uf).toJSON();
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