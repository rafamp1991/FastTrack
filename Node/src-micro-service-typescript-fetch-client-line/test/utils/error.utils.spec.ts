import { Exception4P } from '@microservicos-api/vivo-4p-exceptions-utils';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorUtils } from '../../src/utils/error.utils';

describe('Teste utils Errors - throwError4P(err)', () => {
  it('Deve retornar erro 400.', () => {
    try {
      ErrorUtils.throwError4P(
        new HttpException('BadRequestException', HttpStatus.BAD_REQUEST),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('INVALID_ARGUMENT');
      expect(error.message).toBe(
        'Client specified an invalid argument, request body or query param.',
      );
    }
  });

  it('Deve retornar erro 403.', () => {
    try {
      ErrorUtils.throwError4P(
        new HttpException('ForbiddenException', HttpStatus.FORBIDDEN),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('PERMISSION_DENIED');
      expect(error.message).toBe(
        'Client does not have sufficient permissions to perform this action.',
      );
    }
  });

  it('Deve retornar erro 404.', () => {
    try {
      ErrorUtils.throwError4P(
        new HttpException('NotFoundException', HttpStatus.NOT_FOUND),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('NOT_FOUND');
      expect(error.message).toBe('The specified resource is not found');
    }
  });

  it('Deve retornar erro 500.', () => {
    try {
      ErrorUtils.throwError4P(
        new HttpException(
          'InternalServerErrorException',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('INTERNAL');
      expect(error.message).toBe(
        'Unknown server error. Typically a server bug.',
      );
    }
  });

  it('Deve retornar erro 504.', () => {
    try {
      ErrorUtils.throwError4P(
        new HttpException(
          'GatewayTimeoutException',
          HttpStatus.GATEWAY_TIMEOUT,
        ),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('TIMEOUT');
      expect(error.message).toBe('Request timeout exceeded');
    }
  });
});

describe('Teste utils Errors - throwSpecificError(code: number)', () => {
  it('Deve retornar erro 400.', () => {
    try {
      ErrorUtils.throwSpecificError(400);
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('INVALID_ARGUMENT');
      expect(error.message).toBe(
        'Client specified an invalid argument, request body or query param.',
      );
    }
  });

  it('Deve retornar erro 403.', () => {
    try {
      ErrorUtils.throwSpecificError(403);
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('PERMISSION_DENIED');
      expect(error.message).toBe(
        'Client does not have sufficient permissions to perform this action.',
      );
    }
  });

  it('Deve retornar erro 404.', () => {
    try {
      ErrorUtils.throwSpecificError(404);
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('NOT_FOUND');
      expect(error.message).toBe('The specified resource is not found');
    }
  });

  it('Deve retornar erro 500.', () => {
    try {
      ErrorUtils.throwSpecificError(500);
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('INTERNAL');
      expect(error.message).toBe(
        'Unknown server error. Typically a server bug.',
      );
    }
  });

  it('Deve retornar erro 504.', () => {
    try {
      ErrorUtils.throwSpecificError(504);
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('TIMEOUT');
      expect(error.message).toBe('Request timeout exceeded');
    }
  });
});
