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
const OngRepository_1 = require("../repositories/OngRepository");
let SessionController = class SessionController {
    constructor(ongRepository) {
        this.ongRepository = ongRepository;
    }
    create(requestBody) {
        const { id } = requestBody;
        return this.ongRepository.fetchOne(id, ["name"]);
    }
};
__decorate([
    routing_controllers_1.Post("/sessions"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "create", null);
SessionController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController(),
    __metadata("design:paramtypes", [OngRepository_1.OngRepository])
], SessionController);
exports.SessionController = SessionController;
//# sourceMappingURL=SessionController.js.map