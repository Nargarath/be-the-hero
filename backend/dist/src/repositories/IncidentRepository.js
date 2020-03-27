"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const Incident_1 = require("../models/Incident");
const connection_1 = require("../database/connection");
let IncidentRepository = class IncidentRepository {
    constructor() {
        this.incidents = [];
        this.lastIncidentFetched = null;
    }
    save(title, description, value, ong_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const incident = new Incident_1.Incident(title, description, value, ong_id).toJSON();
            const [id] = yield connection_1.connection('incidents').insert(incident);
            return id;
        });
    }
    fetchOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.lastIncidentFetched = yield connection_1.connection('incidents').where('id', id).first();
            return this.lastIncidentFetched;
        });
    }
    fetchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.incidents = yield connection_1.connection('incidents').select('*');
            return this.incidents;
        });
    }
    paginate(limit = 5, page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const [totalItems] = yield connection_1.connection('incidents').count();
            const nowPage = page;
            const [nowPageItemsCount] = yield connection_1.connection('incidents')
                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                .limit(limit)
                .offset((page - 1) * limit)
                .select('*')
                .count();
            const totalPages = Math.floor(totalItems['count(*)'] / limit);
            this.incidents = yield connection_1.connection('incidents')
                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
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
        });
    }
};
IncidentRepository = __decorate([
    typedi_1.Service()
], IncidentRepository);
exports.IncidentRepository = IncidentRepository;
//# sourceMappingURL=IncidentRepository.js.map