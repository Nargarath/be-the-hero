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
const IncidentRepository_1 = require("../repositories/IncidentRepository");
let IncidentController = class IncidentController {
    constructor(incidentRepository) {
        this.incidentRepository = incidentRepository;
    }
    all(requestBody) {
        if (requestBody.hasOwnProperty("paginate") && requestBody.paginate && requestBody.hasOwnProperty("limit") && requestBody.hasOwnProperty("page")) {
            const { limit, page } = requestBody;
            return this.incidentRepository.paginate(limit, page);
        }
        else if (requestBody.hasOwnProperty("paginate") && requestBody.paginate && requestBody.hasOwnProperty("limit")) {
            const { limit } = requestBody;
            return this.incidentRepository.paginate(limit);
        }
        else if (requestBody.hasOwnProperty("paginate") && requestBody.paginate && requestBody.hasOwnProperty("page")) {
            const { page } = requestBody;
            return this.incidentRepository.paginate(page);
        }
        else {
            return this.incidentRepository.paginate();
        }
        return this.incidentRepository.fetchAll();
    }
    one(id) {
        return this.incidentRepository.fetchOne(id);
    }
    create(requestBody) {
        const { title, description, value, ong_id } = requestBody;
        return this.incidentRepository.save(title, description, value, ong_id);
    }
};
__decorate([
    routing_controllers_1.Get("/incidents"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IncidentController.prototype, "all", null);
__decorate([
    routing_controllers_1.Get("/incidents/:id"),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IncidentController.prototype, "one", null);
__decorate([
    routing_controllers_1.Post("/incidents"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IncidentController.prototype, "create", null);
IncidentController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController(),
    __metadata("design:paramtypes", [IncidentRepository_1.IncidentRepository])
], IncidentController);
exports.IncidentController = IncidentController;
//# sourceMappingURL=IncidentController.js.map