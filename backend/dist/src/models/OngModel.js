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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const class_validator_1 = require("class-validator");
class OngModel {
    constructor(name, email, whatsapp, city, uf, id) {
        this.id = id ? id : this.idGenerate();
        this.name = name;
        this.email = email;
        this.whatsapp = whatsapp;
        this.city = city;
        this.uf = uf;
    }
    idGenerate() {
        return crypto_1.default.randomBytes(4).toString('HEX');
    }
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            whatsapp: this.whatsapp,
            city: this.city,
            uf: this.uf
        };
    }
}
__decorate([
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], OngModel.prototype, "email", void 0);
exports.OngModel = OngModel;
//# sourceMappingURL=OngModel.js.map