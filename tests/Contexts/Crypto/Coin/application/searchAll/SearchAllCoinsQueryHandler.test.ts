import { SearchAllCoinsQueryHandler } from '../../../../../../src/Contexts/Crypto/Coin/application/searchAll/SearchAllCoinsQueryHandler';
import { AllCoinsSearcher } from '../../../../../../src/Contexts/Crypto/Coin/application/searchAll/AllCoinsSearcher';
import { SearchAllCoinsQueryMother } from './SearchAllCoinsQueryMother';
import { SearchAllCoinsResponse } from '../../../../../../src/Contexts/Crypto/Coin/application/searchAll/SearchAllCoinsResponse';
import { Coin } from '../../../../../../src/Contexts/Crypto/Coin/domain/Coin';
import { CoinRepositoryMock } from '../../__mocks__/CoinRepositoryMock';
import { CoinPrice } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinPrice';
import { CoinName } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinName';
import { CoinId } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinId';

let handler: SearchAllCoinsQueryHandler;
let repository: CoinRepositoryMock;
beforeEach(() => {
  repository = new CoinRepositoryMock();
  handler = new SearchAllCoinsQueryHandler(new AllCoinsSearcher(repository));
});

describe('SearchAllCoinsQueryHandler', () => {
  it('should return all coins', async () => {
    const query = SearchAllCoinsQueryMother.default();
    repository.searchAllShouldReturn(coins());
    const response = await handler.handle(query);

    const expectedResponse = SearchAllCoinsResponse.fromDomain(coins());
    repository.searchAllHasBeenCalled();
    expect(response).toEqual(expectedResponse);
  });
});

function coins(): Coin[] {
  return [
    Coin.create(CoinId.fromString('BTC'), CoinName.fromString('Bitcoin'), CoinPrice.fromNumber(23_00)),
    Coin.create(CoinId.fromString('ETH'), CoinName.fromString('Ethereum'), CoinPrice.fromNumber(1700_00)),
    Coin.create(CoinId.fromString('BAT'), CoinName.fromString('Basic Attention Token'), CoinPrice.fromNumber(1_05))
  ];
}
