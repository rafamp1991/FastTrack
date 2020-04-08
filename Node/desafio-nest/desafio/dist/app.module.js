"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const estados_module_1 = require("./estados/estados.module");
const typeorm_1 = require("@nestjs/typeorm");
const cidades_module_1 = require("./cidades/cidades.module");
const clientes_module_1 = require("./clientes/clientes.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [estados_module_1.EstadosModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                database: 'desafio',
                username: 'postgres',
                password: 'admin',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: false,
            }),
            cidades_module_1.CidadesModule,
            clientes_module_1.ClientesModule,],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map