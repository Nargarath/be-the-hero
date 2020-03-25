import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { Service } from 'typedi';
import {OngRepository} from "../repositories/OngRepository";
import {OngModel} from "../models/OngModel";

@Service()
@JsonController()
export class OngController {

    constructor(private ongRepository: OngRepository) {
    }

    @Get("/ongs")
    all(): Promise<OngModel[]>  {
        return this.ongRepository.fetchAll();
    }

    @Get("/ongs/:id")
    one(@Param('id') id: string): Promise<OngModel> {
        return this.ongRepository.fetchOne(id);
    }

    @Post("/ongs")
    create(@Body() requestBody: any): Promise<string>  {
        const { name, email, whatsapp, city, uf } = requestBody;
        return this.ongRepository.save(name, email, whatsapp, city, uf);
    }


}