import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserService } from '../services/users.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): Promise {
    return this.userService.getUsersWithoutKey();
  }

  @Post()
  addUser(@Body() userDto: { uid: string; key: string }): Promise {
    return this.userService.addUser(userDto);
  }
}