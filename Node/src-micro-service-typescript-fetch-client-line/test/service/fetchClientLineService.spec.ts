import { FetchClientLineRepository } from '../../src/repository/fetchClientLine.repository';
import { TestingModule, Test } from '@nestjs/testing';
import { FetchClientLineService } from '../../src/services/fetchClientLine.service';
import { objectMock } from '../mocks/fetchClientLine.mock';
import { Exception4P } from '@microservicos-api/vivo-4p-exceptions-utils';

describe('FetchClientLineService test', () => {
  let fetchClientLineRepository: FetchClientLineRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchClientLineRepository],
    }).compile();

    fetchClientLineRepository = module.get(FetchClientLineRepository);
  });

  it('Should expect an object.', async () => {
    const cpfMock = '02390115039';
    createUsedMock(fetchClientLineRepository);
    const fetchClientLineService = new FetchClientLineService(
      fetchClientLineRepository,
    );
    const result = await fetchClientLineService.getLines(cpfMock);
    expect(Object.keys(result[0]).includes('numeroLinha')).toBe(true);
    expect(result[0]['numeroLinha']).toEqual('54999622082');
    expect(typeof result).toBe('object');
  });

  it('Should return error 404 when returning an empty object.', async () => {
    const mockCallWs = jest.spyOn(fetchClientLineRepository, 'callWS');
    mockCallWs.mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          objectMock.linha[0].statusAssinatura.descricao = 'Cancelado';
          resolve(objectMock);
        }),
    );
    const fetchClientLineService = new FetchClientLineService(
      fetchClientLineRepository,
    );

    try {
      await fetchClientLineService.getLines('12345678910');
      fail();
    } catch (error) {
      expect(error).toBeInstanceOf(Exception4P);
      expect(error.code).toBe('NOT_FOUND');
      expect(error.message).toBe('The specified resource is not found');
    }
  });
});

function createUsedMock(fetchClientLine: FetchClientLineRepository) {
  const mockFetchClientLineRepository = jest.spyOn(
    fetchClientLine,
    'getClientLines',
  );
  mockFetchClientLineRepository.mockImplementation(
    () =>
      new Promise((resolve, reject) => {
        resolve(objectMock);
      }),
  );
}
