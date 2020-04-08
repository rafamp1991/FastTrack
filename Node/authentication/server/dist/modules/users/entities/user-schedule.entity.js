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
const user_entity_1 = require("./user.entity");
let UserSchedule = class UserSchedule {
};
__decorate([
    typeorm_1.Column(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], UserSchedule.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSchedule.prototype, "day", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSchedule.prototype, "hour", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSchedule.prototype, "room", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, user => user.schedule),
    __metadata("design:type", user_entity_1.User)
], UserSchedule.prototype, "user", void 0);
UserSchedule = __decorate([
    typeorm_1.Entity()
], UserSchedule);
exports.UserSchedule = UserSchedule;
//# sourceMappingURL=user-schedule.entity.js.map