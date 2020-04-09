import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import * as crypto from 'crypto';
import { ProjectEntity } from 'project/ProjectEntity ';
import {CreateUserDto} from './models/CreateUserDto';
import {AppErrorTypeEnum} from '../common/error/AppErrorTypeEnum';
import {AppError} from '../common/error/AppError';

@Entity({name: 'users'})
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 30
    })
    public firstName: string;

    @Column({
        length: 50
    })
    public lastName: string;

    @Column({
        length: 50
    })
    public username: string;

    @Column({
        length: 250,
        select: false,
        name: 'password'
    })
    public password_hash: string;

    set password(password: string) {
        const passHash = crypto.createHmac('sha256', password).digest('hex');
        this.password_hash = passHash;
    }

    @OneToMany(type => ProjectEntity, project => project.user)
    projects: ProjectEntity[];

    public static async findAll(): Promise<UserEntity[]> {
        const users: UserEntity[] = await UserEntity.find();
        if (users.length > 0) {
            return Promise.resolve(users);
        } else {
            throw new AppError(AppErrorTypeEnum.NO_USERS_IN_DB);
        }
    }

    public static async createUser(user: CreateUserDto): Promise<UserEntity> {
        let u: UserEntity;
        u = await UserEntity.findOne({username: user.username});
        if (u) {
            throw new AppError(AppErrorTypeEnum.USER_EXISTS);
        } else {
            u = new UserEntity();
            Object.assign(u, user);
            return await UserEntity.save(u);
        }
    }
}