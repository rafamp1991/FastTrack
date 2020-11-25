import { Module } from '@nestjs/common';
import { FetchClientLineController } from './controllers/fetch-client-line.controller';
import { FetchClientLineService } from './services/fetch-client-line.service';
import { FetchClientLineRepository } from '../src/repository/fetch-client-line.repository';

@Module({
  imports: [],
  controllers: [FetchClientLineController],
  providers: [FetchClientLineService, FetchClientLineRepository],
})
export class AppModule {}
