import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { Service } from 'typedi';
import {OngRepository} from "../repositories/OngRepository";
import { Ong } from "../models/Ong";

@Service()
@JsonController()
export class SessionController {

    constructor(private ongRepository: OngRepository) {
    }

    @Post("/sessions")
    create(@Body() requestBody: any): Promise<Ong>  {
        const { id } =  requestBody;
        return this.ongRepository.fetchOne(id,["name"]);
    }


}