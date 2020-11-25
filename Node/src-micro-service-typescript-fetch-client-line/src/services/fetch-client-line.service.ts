import { Injectable } from '@nestjs/common';
import { BaseService } from '@microservicos-api/vivo-nodejs-commons';
import { FetchClientLineRepository } from '../repository/fetch-client-line.repository';
import {
  AbstractVivoExceptionFactory,
  Exception4PCodes,
  VIVO_EXCEPTIONS,
} from '@microservicos-api/vivo-4p-exceptions-utils';

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
    clientLines = clientLines.find(
      (line) => line.linha[0].statusAssinatura.descricao === 'Ativo',
    );
    if (clientLines) {
      return this.filterclientLines(clientLines);
    }
    if (!clientLines) {
      throw AbstractVivoExceptionFactory.getInstance(
        VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
        Exception4PCodes.NOT_FOUND,
      );
    }
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
