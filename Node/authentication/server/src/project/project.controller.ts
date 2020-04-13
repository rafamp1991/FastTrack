import {Body, Controller, HttpStatus, Post, Res, UseGuards, Get} from '@nestjs/common';
import {SessionGuard} from '../auth/SessionGuard';
import {SessionUser} from '../user/user.decorator';
import {UserEntity} from '../user/user.entity';
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {CreateProjectDto} from './models/CreateProjectDto';
import {ProjectService} from './project.service';
import { ProjectEntity } from './ProjectEntity ';

@ApiUseTags('project')
@Controller('project')
export class ProjectController {

    constructor(private readonly projectService: ProjectService) {}
    
    @Post('')
    @UseGuards(SessionGuard)
    @ApiOperation({title: 'Cria um projeto para o usuário logado'})
    public async createProject(@Body() createProjects: CreateProjectDto[], @Res() res, @SessionUser() user: UserEntity) {
        const projects: ProjectEntity[] = await this.projectService.createProject(createProjects, user);
        return res.status(HttpStatus.OK).send(projects);
    }

    @Get('')
    @UseGuards(SessionGuard)
    @ApiOperation({title: 'Obtém projetos por usuário'})
    public async getProjects(@Res() res, @SessionUser() user: UserEntity) {
        const projects: ProjectEntity[] = await this.projectService.getProjectsForUser(user);
        return res.status(HttpStatus.OK).send(projects);
    }
}