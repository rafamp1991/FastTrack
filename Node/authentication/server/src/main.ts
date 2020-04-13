import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DispatchError } from 'common/filters/DispatchError';
import * as passport from 'passport';
import * as session from 'express-session'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new DispatchError());

  app.use(session({
    secret: 'secret-key',
    name: 'sess-tutorial',
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize());
  app.use(passport.session());

  const options = new DocumentBuilder()
        .setTitle('Authentication')
        .setDescription('Autenticação com NestJs.')
        .setVersion('1.0')
        .setHost('https://github.com/rafamp1991/FastTrack/tree/master/Node/authentication/server')
        .addTag('nestjs')
        .addBearerAuth('Authorization', 'header')
        .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
