import { Injectable } from '@nestjs/common';
import { BaseService } from '@microservicos-api/vivo-nodejs-commons';
import { FetchClientLineRepository } from '../repository/fetchClientLine.repository';
import { ErrorUtils } from '../utils/error.utils';

@Injectable()
export class FetchClientLineService extends BaseService {
  constructor(
    private readonly fetchClientLineRepository: FetchClientLineRepository,
  ) {
    super();
  }

  async getLines(cpfOrCnpj: string): Promise<Array<object>> {
    let clientLines = [];
    clientLines.push(
      await this.fetchClientLineRepository.getClientLines(cpfOrCnpj),
    );
    const result = this.findclientLines(clientLines);
    return result;
  }

  private findclientLines(clientLines) {
    const result = clientLines.find(
      line => line.linha[0].statusAssinatura.descricao === 'Ativo',
    );

    if (!result) {
      ErrorUtils.throwSpecificError(404);
    }
    return this.filterclientLines(result);
  }

  private filterclientLines(clientLines) {
    let lines = [];

    lines.push({
      numeroLinha: clientLines.linha[0].numeroLinha,
      status: clientLines.linha[0].statusAssinatura.descricao,
      tipoLinha: clientLines.linha[0].tipoAssinatura.descricao,
      origemLinha: clientLines.linha[0].sistemaOrigem.sigla,
    });

    return lines;
  }
}
