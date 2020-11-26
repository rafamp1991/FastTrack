import { Injectable } from '@nestjs/common';
import { SoapEsbRepository } from '@microservicos-api/vivo-nodejs-commons';
import { FetchClientLine } from 'src/interfaces/fetch-client-line';
import { ErrorUtils } from '../utils/error.utils';
import {
  AbstractVivoExceptionFactory,
  Exception4PCodes,
  VIVO_EXCEPTIONS,
} from '@microservicos-api/vivo-4p-exceptions-utils';

@Injectable()
export class FetchClientLineRepository extends SoapEsbRepository {
  constructor() {
    super('http://alsb3-soa/Linha?wsdl');
  }

  public async getClientLines(cpfOrCnpj): Promise<any> {
    const operation = 'buscarListaLinhasPorCPFCNPJ';

    const args = {
      numeroCPFCNPJ: cpfOrCnpj,
    };

    return this.callWS(operation, args, {})
      .then(result => {
        if (result) {
          this.logger.info(
            `Lines from client was retrieved with success for cpfOrCnpj: ${cpfOrCnpj}`,
            'FetchClientLineRepository - getClientLines(cpfOrCnpj: string)',
            null,
          );
          return result;
        }

        this.logger.error(
          `Lines from client for cpfOrCnpj: ${cpfOrCnpj} was not found`,
          'FetchClientLineRepository - getClientLines(cpfOrCnpj: string)',
          null,
        );
        throw AbstractVivoExceptionFactory.getInstance(
          VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
          Exception4PCodes.NOT_FOUND,
        );
      })
      .catch(error => {
        this.logger.error(
          `Error while trying to retrieve lines from client for cpfOrCnpj: ${cpfOrCnpj}`,
          'FetchClientLineRepository - getClientLines(cpfOrCnpj: string)',
          error,
        );
        ErrorUtils.throwError4P(error);
      });
  }
}
