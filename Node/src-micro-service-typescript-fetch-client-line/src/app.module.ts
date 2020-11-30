import { Module } from '@nestjs/common';
import { FetchClientLineController } from './controllers/fetchClientLine.controller';
import { FetchClientLineService } from './services/fetchClientLine.service';
import { FetchClientLineRepository } from './repository/fetchClientLine.repository';

@Module({
  imports: [],
  controllers: [FetchClientLineController],
  providers: [FetchClientLineService, FetchClientLineRepository],
})
export class AppModule {}
