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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const estados_entity_1 = require("../estados/estados.entity");
const clientes_entity_1 = require("../clientes/clientes.entity");
let Cidade = class Cidade {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "integer"
    }),
    __metadata("design:type", Number)
], Cidade.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 100
    }),
    __metadata("design:type", String)
], Cidade.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({
        type: "real"
    }),
    __metadata("design:type", typeorm_1.Double)
], Cidade.prototype, "latitude", void 0);
__decorate([
    typeorm_1.Column({
        type: "real"
    }),
    __metadata("design:type", typeorm_1.Double)
], Cidade.prototype, "longitude", void 0);
__decorate([
    typeorm_1.Column({
        type: "boolean"
    }),
    __metadata("design:type", Boolean)
], Cidade.prototype, "capital", void 0);
__decorate([
    typeorm_1.ManyToOne(type => estados_entity_1.Estado, Estados => Estados.id),
    __metadata("design:type", estados_entity_1.Estado)
], Cidade.prototype, "estado", void 0);
__decorate([
    typeorm_1.OneToMany(type => clientes_entity_1.Cliente, clientes => clientes.cidade),
    __metadata("design:type", Array)
], Cidade.prototype, "clientes", void 0);
Cidade = __decorate([
    typeorm_1.Entity({ name: "cidades" })
], Cidade);
exports.Cidade = Cidade;
//# sourceMappingURL=cidades.entity.js.map