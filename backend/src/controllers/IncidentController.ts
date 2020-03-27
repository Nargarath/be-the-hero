import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { Service } from 'typedi';
import { IncidentRepository } from "../repositories/IncidentRepository";
import {Incident} from "../models/Incident";
import {Paginate} from "../contracts/PaginateContract";

@Service()
@JsonController()
export class IncidentController {

    constructor(private incidentRepository: IncidentRepository) {
    }

    @Get("/incidents")
    all(@Body() requestBody: any): Promise<Incident[]> | Promise<Paginate>  {
        if (requestBody.hasOwnProperty("paginate") && requestBody.paginate && requestBody.hasOwnProperty("limit") && requestBody.hasOwnProperty("page")) {
            const { limit, page } = requestBody;
            return this.incidentRepository.paginate(limit, page);
        } else if(requestBody.hasOwnProperty("paginate") && requestBody.paginate && requestBody.hasOwnProperty("limit")) {
            const { limit } = requestBody;
            return this.incidentRepository.paginate(limit);
        } else if (requestBody.hasOwnProperty("paginate") && requestBody.paginate && requestBody.hasOwnProperty("page")) {
            const { page } = requestBody;
            return this.incidentRepository.paginate(page);
        } else {
            return this.incidentRepository.paginate();
        }
        return this.incidentRepository.fetchAll();
    }

    @Get("/incidents/:id")
    one(@Param('id') id: string): Promise<Incident> {
        return this.incidentRepository.fetchOne(id);
    }

    @Post("/incidents")
    create(@Body() requestBody: any): Promise<number>  {
        const { title, description, value, ong_id } = requestBody;
        return this.incidentRepository.save(title, description, value, ong_id);
    }

}

