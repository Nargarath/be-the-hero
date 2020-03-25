"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const ong_1 = require("../repositories/ong");
let OngController = class OngController {
    constructor(ongRepository) {
        this.ongRepository = ongRepository;
    }
    all() {
        return this.ongRepository.fetchAll();
    }
    one(id) {
        return this.ongRepository.fetchOne(id);
    }
    create(requestBody) {
        const { name, email, whatsapp, city, uf } = requestBody;
        return this.ongRepository.save(name, email, whatsapp, city, uf);
    }
};
__decorate([
    routing_controllers_1.Get("/ongs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OngController.prototype, "all", null);
__decorate([
    routing_controllers_1.Get("/ongs/:id"),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OngController.prototype, "one", null);
__decorate([
    routing_controllers_1.Post("/ongs"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OngController.prototype, "create", null);
OngController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController(),
    __metadata("design:paramtypes", [ong_1.OngRepository])
], OngController);
exports.OngController = OngController;
//# sourceMappingURL=ong.js.map