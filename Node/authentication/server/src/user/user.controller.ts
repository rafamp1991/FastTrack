import {Body, Controller, Get, HttpStatus, Post, Req, Res, Session} from '@nestjs/common';
import {UserService} from './user.service';
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
import {CreateUserDto} from './models/CreateUserDto';
import {Request, Response} from 'express';
import { UserEntity } from './user.entity';

@ApiUseTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) {}
    
    @Get('')
    @ApiOperation({title: 'Get List of All Users'})
    @ApiResponse({ status: 200, description: 'User Found.'})
    @ApiResponse({ status: 404, description: 'No Users found.'})
    public async getAllUsers(@Req() req: Request, @Res() res, @Session() session) {
        const users: UserEntity[] = await this.usersService.findAll();
        return res
                .status(HttpStatus.OK)
                .send(users);
    }
    
    @Post('')
    @ApiOperation({title: 'Create User'})
    public async create(@Body() createUser: CreateUserDto, @Res() res) {
        await this.usersService.createUser(createUser);
        return res.status(HttpStatus.CREATED).send();
    }

    @Post('login')
    @ApiOperation({title: 'Authenticate'})
    @ApiBearerAuth()
    public async login(@Req() req: Request, @Res() res: Response, @Session() session) {
        return res.status(HttpStatus.OK).send();
    }
}