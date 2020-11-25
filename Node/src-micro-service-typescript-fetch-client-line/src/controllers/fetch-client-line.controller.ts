import { Controller, Get, Param } from '@nestjs/common';
import { FetchClientLineService } from '../services/fetch-client-line.service';
import { BaseController } from '@microservicos-api/vivo-nodejs-commons';

@Controller('users/:numeroCPFCNPJ')
export class FetchClientLineController extends BaseController {
  constructor(private readonly fetchClientLineService: FetchClientLineService) {
    super();
  }

  @Get('get-lines')
  public async getLines(
    @Param('numeroCPFCNPJ') cpfOrCnpj: string,
  ): Promise<Array<object>> {
    return await this.fetchClientLineService.getLines(cpfOrCnpj);
  }
}
