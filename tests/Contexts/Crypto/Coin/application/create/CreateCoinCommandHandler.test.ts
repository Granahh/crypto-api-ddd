import { CoinRepositoryMock } from '../../__mocks__/CoinRepositoryMock';
import { CoinCreator } from '../../../../../../src/Contexts/Crypto/Coin/application/create/CoinCreator';
import { CreateCoinCommandHandler } from '../../../../../../src/Contexts/Crypto/Coin/application/create/CreateCoinCommandHandler';
import { CreateCoinCommandMother } from './CreateCoinCommandMother';
import { CoinIdMother } from '../../domain/value-object/CoinIdMother';
import { CoinMother } from '../../domain/CoinMother';
import { AlreadyExistsError } from '../../../../../../src/Contexts/Shared/domain/error/AlreadyExistsError';

let handler: CreateCoinCommandHandler;
let coinRepository: CoinRepositoryMock;

beforeEach(() => {
  coinRepository = new CoinRepositoryMock();
  handler = new CreateCoinCommandHandler(new CoinCreator(coinRepository));
});

describe('CreateCoinCommandHandler', () => {
  it('should create a coin', async () => {
    const command = CreateCoinCommandMother.default();

    coinRepository.searchByIdShouldReturn(null);

    await expect(handler.handle(command)).resolves.not.toThrow();

    coinRepository.assertThatSearchByIdHasBeenCalledWith(CoinIdMother.default());
    coinRepository.searchByIdHasBeenCalled();

    coinRepository.assertThatSaveHasBeenCalledWith(CoinMother.default());
    coinRepository.saveHasBeenCalled();
  });

  it('should fail if the coin already exists', async () => {
    const command = CreateCoinCommandMother.default();

    coinRepository.searchByIdShouldReturn(CoinMother.default());

    await expect(handler.handle(command)).rejects.toThrowError(AlreadyExistsError);

    coinRepository.searchByIdHasBeenCalled();
    coinRepository.assertThatSearchByIdHasBeenCalledWith(CoinIdMother.default());
    coinRepository.saveHasBeenCalled(0);
  });
});
