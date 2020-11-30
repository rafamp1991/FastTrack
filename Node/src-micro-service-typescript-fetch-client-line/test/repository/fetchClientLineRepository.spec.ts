import { Test, TestingModule } from '@nestjs/testing';
import { objectMock } from '../mocks/fetchClientLine.mock';
import { FetchClientLineRepository } from '../../src/repository/fetchClientLine.repository';
import { Exception4P } from '@microservicos-api/vivo-4p-exceptions-utils';

describe('FetchClientLineRepository test', () => {
  const mockCpf = '02390115039';
  let fetchClientLineRepository: FetchClientLineRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchClientLineRepository],
    }).compile();

    fetchClientLineRepository = module.get(FetchClientLineRepository);
  });

  it('Should expect an object.', async () => {
    const mockCallWs = jest.spyOn(fetchClientLineRepository, 'callWS');
    mockCallWs.mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          resolve(objectMock);
        }),
    );
    const result = await fetchClientLineRepository.getClientLines(mockCpf);
    expect(result).toBe(objectMock);
    mockCallWs.mockClear();
  });

  it('Should return error 404 when returning an empty object.', async () => {
    const mockCallWs = jest.spyOn(fetchClientLineRepository, 'callWS');
    mockCallWs.mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          resolve({}[0]);
        }),
    );

    try {
      await fetchClientLineRepository.getClientLines('88');
      fail();
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('NOT_FOUND');
      expect(error.message).toBe('The specified resource is not found');
    }

    mockCallWs.mockClear();
  });
});
