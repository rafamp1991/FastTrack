import { FetchClientLineRepository } from '../../src/repository/fetch-client-line.repository';
import { TestingModule, Test } from '@nestjs/testing';
import { FetchClientLineService } from '../../src/services/fetch-client-line.service';
import { objectMock } from '../mocks/fetchClientLine.mock';

describe('FetchClientLineService test', () => {
  let fetchClientLine: FetchClientLineRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchClientLineRepository],
    }).compile();

    fetchClientLine = module.get(FetchClientLineRepository);
  });

  it('Should expect an object.', async () => {
    const cpfMock = '02390115039';
    createUsedMock(fetchClientLine);
    const fetchClientLineService = new FetchClientLineService(fetchClientLine);
    const result = await fetchClientLineService.getLines(cpfMock);
    expect(Object.keys(result[0]).includes('numeroLinha')).toBe(true);
    expect(result[0]['numeroLinha']).toEqual('54999622082');
    expect(typeof result).toBe('object');
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
