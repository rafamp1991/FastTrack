import { Injectable } from '@nestjs/common';
import {IUserService} from './IUserService';
import {CreateUserDto} from './models/CreateUserDto';
import { ProjectEntity } from 'project/ProjectEntity ';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService implements IUserService{
    public async findAll(): Promise<UserEntity[]> {
        return await UserEntity.findAll();
    }
    public async createUser(user: CreateUserDto): Promise<UserEntity> {
       return await UserEntity.createUser(user);
    }
    public async getProjectsForUser(user: UserEntity): Promise<ProjectEntity[]> {
        return undefined;
    }
}