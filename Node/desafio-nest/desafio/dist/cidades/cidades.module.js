"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cidades_service_1 = require("./cidades.service");
const cidades_controller_1 = require("./cidades.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cidade_entity_1 = require("./cidade.entity");
const estado_entity_1 = require("../estados/estado.entity");
let CidadesModule = class CidadesModule {
};
CidadesModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([cidade_entity_1.Cidade, estado_entity_1.Estado]),
        ],
        providers: [cidades_service_1.CidadesService],
        controllers: [cidades_controller_1.CidadesController]
    })
], CidadesModule);
exports.CidadesModule = CidadesModule;
//# sourceMappingURL=cidades.module.js.map