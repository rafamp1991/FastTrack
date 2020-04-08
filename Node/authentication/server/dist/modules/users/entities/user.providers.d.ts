import { Connection } from 'typeorm';
import { User } from './user.entity';
export declare const UserProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<User>;
    inject: string[];
}[];
