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
const ProfileRepository_1 = require("../repositories/ProfileRepository");
let ProfileController = class ProfileController {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    index(params) {
        const ong_id = params.authorization;
        return this.profileRepository.incidentsFromOng(ong_id);
    }
};
__decorate([
    routing_controllers_1.Get("/profile"),
    __param(0, routing_controllers_1.HeaderParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "index", null);
ProfileController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController(),
    __metadata("design:paramtypes", [ProfileRepository_1.ProfileRepository])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=ProfileController.js.map