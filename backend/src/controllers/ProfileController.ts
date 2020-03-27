import {JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete, HeaderParams} from "routing-controllers";
import { Service } from 'typedi';
import {Incident} from "../models/Incident";
import {ProfileRepository} from "../repositories/ProfileRepository";

@Service()
@JsonController()
export class ProfileController {

    constructor(private profileRepository: ProfileRepository) {
    }

    @Get("/profile")
    index(@HeaderParams() params: any): Promise<Incident[]>  {
        const ong_id = params.authorization;
        return this.profileRepository.incidentsFromOng(ong_id);
    }



}