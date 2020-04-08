import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserProviders } from './entities/user.providers';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, ...UserProviders],
  controllers: [UserController],
  exports: [UserService],
})
export class UsersModule {}