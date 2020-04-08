import { Connection } from 'typeorm';
import { AuthEntity } from './auth.entity';
export declare const AuthProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<AuthEntity>;
    inject: string[];
}[];
