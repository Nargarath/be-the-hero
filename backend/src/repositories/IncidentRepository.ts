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
        const [id] = await connection('incidents').insert(incident);
        return id;
    }

    async fetchOne(id: string) {
        this.lastIncidentFetched = await connection('incidents').where('id', id).first();
        return this.lastIncidentFetched;
    }

    async fetchAll() {
        this.incidents = await connection('incidents').select('*');
        return this.incidents;
    }

    async paginate(limit = 5, page = 1) {
        const [totalItems] = await connection('incidents').count();
        const nowPage = page;
        const [nowPageItemsCount] = await connection('incidents')
            .join('ongs', 'ongs.id','=','incidents.ong_id')
            .limit(limit)
            .offset((page - 1) * limit)
            .select('*')
            .count();
        const totalPages =  Math.floor(totalItems['count(*)']/limit);
        this.incidents = await connection('incidents')
            .join('ongs', 'ongs.id','=','incidents.ong_id')
            .limit(limit)
            .offset((page - 1) * limit)
            .select([
                'indicents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        return {
            totalItems: totalItems['count(*)'],
            page: {
                now: nowPage,
                total: totalPages,
                itemsCount: nowPageItemsCount['count(*)']
            },
            data: this.incidents
        };
    }

}