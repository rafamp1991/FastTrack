import { User as UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    getUsersWithoutKey(): Promise<UserEntity[]>;
    addUser(userDto: {
        uid: string;
        key: string;
    }): Promise<any>;
    getUsersMustBeWorkingNow(): Promise<UserEntity[]>;
    private convertBetweenRealHourAndScheduleHour;
    private isMorning;
}
