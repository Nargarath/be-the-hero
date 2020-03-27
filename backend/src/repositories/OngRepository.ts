import {Service} from "typedi";
import { Ong } from "../models/Ong";
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

    async fetchOne(id: string, columns?: string[]) {
        this.lastOngFetched = await connection('ongs')
            .column(columns ? columns : '*')
            .select()
            .where('id', id)
            .first();
        return this.lastOngFetched;
    }

    async fetchAll() {
        this.ongs = await connection('ongs').select('*');
        return this.ongs;
    }

}