import { Injectable } from '@nestjs/common';
import { ProjectEntity } from './ProjectEntity ';
import { UserEntity } from 'user/user.entity';
import { CreateProjectDto } from './models/CreateProjectDto';

@Injectable()
export class ProjectService {
    public async createProject(projects: CreateProjectDto[], user: UserEntity): Promise<ProjectEntity[]> {
        return ProjectEntity.createProjects(projects, user);
    }

    public async getProjectsForUser(user: UserEntity): Promise<ProjectEntity[]> {
        return ProjectEntity.getProjects(user);
    }
}
