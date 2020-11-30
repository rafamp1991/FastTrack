import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Generic4PExceptionFilter } from '@microservicos-api/vivo-4p-exceptions-utils';
import { ExpressCommonsConfig } from '@microservicos-api/vivo-nodejs-commons';
import * as dotenv from 'dotenv';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const PORT = process.env.PORT || 8081;
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/lines/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  //const expressCommonsConfig = new ExpressCommonsConfig();
  //expressCommonsConfig.configure(app);
  app.setGlobalPrefix(process.env.APPLICATION_PREFIX);
  app.useGlobalFilters(new Generic4PExceptionFilter());

  await app.listen(PORT);
}
bootstrap();
