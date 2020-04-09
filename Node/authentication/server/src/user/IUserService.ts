import {CreateUserDto} from './models/CreateUserDto';
import { UserEntity } from './user.entity';
import { ProjectEntity } from 'project/ProjectEntity ';

export interface IUserService {
    findAll(): Promise<UserEntity[]>;
    createUser(user: CreateUserDto): Promise<UserEntity>;
    getProjectsForUser(user: UserEntity): Promise<ProjectEntity[]>;
}