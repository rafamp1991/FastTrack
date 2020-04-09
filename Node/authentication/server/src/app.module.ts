import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserEntity } from 'user/user.entity';
import { ProjectEntity } from 'project/ProjectEntity ';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'auth',
      username: 'postgres',
      password: 'admin',
      entities: [UserEntity, ProjectEntity],
      synchronize: true,
   }),
    UserModule, 
    ProjectModule
  ],
  controllers: [AppController],
  providers: [ AppService ]
})
export class AppModule {}
