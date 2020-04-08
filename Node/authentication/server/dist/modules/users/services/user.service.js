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
const user_entity_1 = require("../entities/user.entity");
const common_1 = require("@nestjs/common");
const database_tokens_constants_1 = require("../../../common/config/database.tokens.constants");
const typeorm_1 = require("typeorm");
const moment = require("moment");
const user_constants_1 = require("../constants/user.constants");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    getUsersWithoutKey() {
        return this.usersRepository
            .createQueryBuilder('user')
            .select('user.uid')
            .where('user.key IS NULL')
            .getMany();
    }
    addUser(userDto) {
        return this.usersRepository.save(Object.assign(new user_entity_1.User(), userDto));
    }
    getUsersMustBeWorkingNow() {
        const date = moment();
        const dayOfWeek = date.day() - 1;
        const hourNow = this.convertBetweenRealHourAndScheduleHour(date);
        const isMorning = this.isMorning(date);
        const users = this.usersRepository
            .createQueryBuilder('user')
            .innerJoinAndSelect('user.schedule', 'schedule')
            .leftJoinAndSelect('user.auths', 'auths', '(auths.timestamp > :lowerHour AND auths.timestamp < :upperHour)', {
            lowerHour: isMorning
                ? moment(user_constants_1.FIRST_HOUR_MORNING, user_constants_1.HOUR_FORMAT).unix()
                : moment(user_constants_1.FIRST_HOUR_NIGHT, user_constants_1.HOUR_FORMAT).unix(),
            upperHour: isMorning
                ? moment(user_constants_1.LAST_HOUR_MORNING, user_constants_1.HOUR_FORMAT).unix()
                : moment(user_constants_1.LAST_HOUR_NIGHT, user_constants_1.HOUR_FORMAT).unix(),
        })
            .where('schedule.day = :dayOfWeek', {
            dayOfWeek,
        })
            .andWhere('schedule.hour = :hourNow', {
            hourNow,
        })
            .andWhere('schedule.room NOT IN (:...exclude)', {
            exclude: user_constants_1.SCHEDULE_EXCLUDE,
        })
            .getMany();
        return users;
    }
    convertBetweenRealHourAndScheduleHour(realHour) {
        return user_constants_1.SCHEDULE_HOURS.findIndex(range => realHour.isBetween(moment(range[0], user_constants_1.HOUR_FORMAT), moment(range[1], user_constants_1.HOUR_FORMAT)));
    }
    isMorning(hour) {
        return hour.isBetween(moment(user_constants_1.FIRST_HOUR_MORNING), moment(user_constants_1.LAST_HOUR_MORNING));
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(database_tokens_constants_1.USER_REPOSITORY_TOKEN)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map