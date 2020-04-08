import { UserSchedule } from './user-schedule.entity';
import { AuthEntity } from '../../auth/entities/auth.entity';
export declare class User {
    uid: string;
    name: string;
    auths: AuthEntity[];
    key: string;
    schedule: UserSchedule[];
}
