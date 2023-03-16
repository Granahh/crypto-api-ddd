import { CoinRepositoryMock } from '../../__mocks__/CoinRepositoryMock';
import { CoinCreator } from '../../../../../../src/Contexts/Crypto/Coin/application/create/CoinCreator';
import { CreateCoinCommandHandler } from '../../../../../../src/Contexts/Crypto/Coin/application/create/CreateCoinCommandHandler';
import { CreateCoinCommandMother } from './CreateCoinCommandMother';
import { CoinIdMother } from '../../domain/value-object/CoinIdMother';
import { CoinMother } from '../../domain/CoinMother';
import { AlreadyExistsError } from '../../../../../../src/Contexts/Shared/domain/error/AlreadyExistsError';
import EventBusMock from '../../../../Shared/__mocks__/EventBusMock';
import { CoinCreatedDomainEvent } from '../../../../../../src/Contexts/Crypto/Coin/domain/CoinCreatedDomainEvent';
import { Uuid } from '../../../../../../src/Contexts/Shared/domain/value-object/Uuid';

let handler: CreateCoinCommandHandler;
let coinRepository: CoinRepositoryMock;
let eventBusMock: EventBusMock;

beforeAll(() => {
  jest.spyOn(Uuid, 'random').mockReturnValue(new Uuid('1c95455f-29cd-4842-ac20-be7d59ff0120'));
});
afterAll(() => {
  jest.spyOn(Uuid, 'random').mockRestore();
});
beforeEach(() => {
  coinRepository = new CoinRepositoryMock();
  eventBusMock = new EventBusMock();
  handler = new CreateCoinCommandHandler(new CoinCreator(coinRepository, eventBusMock));
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

    eventBusMock.assertIsCalledTimes(1);
    eventBusMock.assertLastPublishedEventIs(CoinCreatedDomainEvent.fromDomain(CoinMother.default()));
  });

  it('should fail if the coin already exists', async () => {
    const command = CreateCoinCommandMother.default();

    coinRepository.searchByIdShouldReturn(CoinMother.default());

    await expect(handler.handle(command)).rejects.toThrowError(AlreadyExistsError);

    coinRepository.searchByIdHasBeenCalled();
    coinRepository.assertThatSearchByIdHasBeenCalledWith(CoinIdMother.default());
    coinRepository.saveHasBeenCalled(0);

    eventBusMock.assertIsCalledTimes(0);
  });
});
