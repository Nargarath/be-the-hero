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
const OngModel_1 = require("../models/OngModel");
const connection_1 = require("../database/connection");
let OngRepository = class OngRepository {
    constructor() {
        this.ongs = [];
        this.lastOngFetched = null;
    }
    save(name, email, whatsapp, city, uf) {
        return __awaiter(this, void 0, void 0, function* () {
            const ong = new OngModel_1.OngModel(name, email, whatsapp, city, uf).toJSON();
            yield connection_1.connection('ongs').insert(ong);
            return ong.id;
        });
    }
    fetchOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.lastOngFetched = yield connection_1.connection('ongs').where('id', id).first();
            return this.lastOngFetched;
        });
    }
    fetchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.ongs = yield connection_1.connection('ongs').select('*');
            return this.ongs;
        });
    }
};
OngRepository = __decorate([
    typedi_1.Service()
], OngRepository);
exports.OngRepository = OngRepository;
//# sourceMappingURL=OngRepository.js.map