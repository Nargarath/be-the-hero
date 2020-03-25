import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { Service } from 'typedi';
import { IncidentRepository } from "../repositories/IncidentRepository";
import {Incident} from "../models/Incident";

@Service()
@JsonController()
export class IncidentController {

    constructor(private incidentRepository: IncidentRepository) {
    }

    @Get("/incidents")
    all(): Promise<Incident[]>  {
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