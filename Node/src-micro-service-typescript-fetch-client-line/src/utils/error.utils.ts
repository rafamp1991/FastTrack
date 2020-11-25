import {
  AbstractVivoExceptionFactory,
  Exception4P,
  Exception4PCodes,
  VIVO_EXCEPTIONS,
} from '@microservicos-api/vivo-4p-exceptions-utils';
import { HttpException } from '@nestjs/common';

export class ErrorUtils {
  public static throwError4P(err): never {
    let status: number;

    if (err instanceof Exception4P) {
      throw err;
    }

    if (err.response && err.response.status === 404) status = 404;

    if (!status) status = err instanceof HttpException ? err.getStatus() : 500;

    switch (status) {
      case 400:
        throw AbstractVivoExceptionFactory.getInstance(
          VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
          Exception4PCodes.INVALID_ARGUMENT,
        );
      case 403:
        throw AbstractVivoExceptionFactory.getInstance(
          VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
          Exception4PCodes.PERMISSION_DENIED,
        );
      case 404:
        throw AbstractVivoExceptionFactory.getInstance(
          VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
          Exception4PCodes.NOT_FOUND,
        );
      case 504:
        throw AbstractVivoExceptionFactory.getInstance(
          VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
          Exception4PCodes.TIMEOUT,
        );
      default:
        throw AbstractVivoExceptionFactory.getInstance(
          VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
          Exception4PCodes.INTERNAL,
        );
    }
  }

  public static throwSpecificError(code: number): never {
    switch (code) {
      case 400:
        throw AbstractVivoExceptionFactory.getInstance(
          VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
          Exception4PCodes.INVALID_ARGUMENT,
        );
      case 403:
        throw AbstractVivoExceptionFactory.getInstance(
          VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
          Exception4PCodes.PERMISSION_DENIED,
        );
      case 404:
        throw AbstractVivoExceptionFactory.getInstance(
          VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
          Exception4PCodes.NOT_FOUND,
        );
      case 504:
        throw AbstractVivoExceptionFactory.getInstance(
          VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
          Exception4PCodes.TIMEOUT,
        );
      default:
        throw AbstractVivoExceptionFactory.getInstance(
          VIVO_EXCEPTIONS.QUARTA_PLATAFORMA,
          Exception4PCodes.INTERNAL,
        );
    }
  }
}
