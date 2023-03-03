import { SearchAllCoinsQueryHandler } from '../../../../../../src/Contexts/Crypto/Coin/application/searchAll/SearchAllCoinsQueryHandler';
import { AllCoinsSearcher } from '../../../../../../src/Contexts/Crypto/Coin/application/searchAll/AllCoinsSearcher';
import { SearchAllCoinsQueryMother } from './SearchAllCoinsQueryMother';
import { SearchAllCoinsResponse } from '../../../../../../src/Contexts/Crypto/Coin/application/searchAll/SearchAllCoinsResponse';
import { Coin } from '../../../../../../src/Contexts/Crypto/Coin/domain/Coin';

let handler: SearchAllCoinsQueryHandler;

beforeEach(() => {
  handler = new SearchAllCoinsQueryHandler(new AllCoinsSearcher());
});

describe('SearchAllCoinsQueryHandler', () => {
  it('should return all coins', async () => {
    const query = SearchAllCoinsQueryMother.default();

    const response = await handler.handle(query);

    const expectedResponse = SearchAllCoinsResponse.fromDomain(coins());
    expect(response).toEqual(expectedResponse);
  });
});

function coins(): Coin[] {
  return [
    Coin.create('BTC', 'Bitcoin', '23000'),
    Coin.create('ETH', 'Ethereum', '3000'),
    Coin.create('BAT', 'Basic Attention Token', '1')
  ];
}
