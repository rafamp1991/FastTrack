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
const user_schedule_entity_1 = require("./user-schedule.entity");
const auth_entity_1 = require("../../auth/entities/auth.entity");
let User = class User {
};
__decorate([
    typeorm_1.Column(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], User.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(type => auth_entity_1.AuthEntity, auth => auth.user),
    __metadata("design:type", Array)
], User.prototype, "auths", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "key", void 0);
__decorate([
    typeorm_1.OneToMany(type => user_schedule_entity_1.UserSchedule, userSchedule => userSchedule.user),
    __metadata("design:type", Array)
], User.prototype, "schedule", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map