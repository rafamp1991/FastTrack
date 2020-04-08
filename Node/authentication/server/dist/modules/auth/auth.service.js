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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const database_tokens_constants_1 = require("../../common/config/database.tokens.constants");
const auth_constants_1 = require("./constants/auth.constants");
const moment = require("moment");
let AuthService = class AuthService {
    constructor(authRepository, userRepository) {
        this.authRepository = authRepository;
        this.userRepository = userRepository;
    }
    async authIn(auth) {
        try {
            const user = await this.saveTicketing(Object.assign(Object.assign({}, auth), { reader: auth_constants_1.INPUT }));
            return this.welcomeTeacher(user.name);
        }
        catch (e) {
            return { status: auth_constants_1.STATUS_CODE_RESPONSE.KO, msg: 'Error na entrada' };
        }
    }
    async authOut(auth) {
        try {
            const user = await this.saveTicketing(Object.assign(Object.assign({}, auth), { reader: auth_constants_1.OUTPUT }));
            return this.byeTeacher(user.name);
        }
        catch (e) {
            return { status: auth_constants_1.STATUS_CODE_RESPONSE.KO, msg: 'Error na saida' };
        }
    }
    async saveTicketing(auth) {
        const user = await this.userRepository.findOne({
            where: {
                key: auth.key,
            },
        });
        await this.authRepository.save(Object.assign(Object.assign({}, auth), { user, timestamp: moment().unix() }));
        return user;
    }
    welcomeTeacher(nameTeacher) {
        return {
            status: auth_constants_1.STATUS_CODE_RESPONSE.OK,
            msg: 'Entrada - ${nameTeacher}',
        };
    }
    byeTeacher(nameTeacher) {
        return {
            status: auth_constants_1.STATUS_CODE_RESPONSE.OK,
            msg: 'Saida - ${nameTeacher}',
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(database_tokens_constants_1.AUTH_REPOSITORY_TOKEN)),
    __param(1, common_1.Inject(database_tokens_constants_1.USER_REPOSITORY_TOKEN)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map