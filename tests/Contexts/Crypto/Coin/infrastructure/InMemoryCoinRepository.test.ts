import { InMemoryCoinRepository } from '../../../../../src/Contexts/Crypto/Coin/infrastructure/InMemoryCoinRepository';
import { Coin } from '../../../../../src/Contexts/Crypto/Coin/domain/Coin';
import { CoinId } from '../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinId';
import { CoinName } from '../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinName';
import { CoinPrice } from '../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinPrice';

let repository: InMemoryCoinRepository;

beforeEach(() => {
  repository = new InMemoryCoinRepository();
});

describe('InMemoryCoinRepository', () => {
  it('should return all coins', async () => {
    const coins = await repository.searchAll();

    expect(coins).toEqual(expectedCoins());
  });
});

function expectedCoins(): Coin[] {
  return [
    Coin.create(CoinId.fromString('BTC'), CoinName.fromString('Bitcoin'), CoinPrice.fromNumber(23_000.00)),
    Coin.create(CoinId.fromString('ETH'), CoinName.fromString('Ethereum'), CoinPrice.fromNumber(3_000.00)),
    Coin.create(CoinId.fromString('BAT'), CoinName.fromString('Basic Attention Token'), CoinPrice.fromNumber(1.00))
  ];
}
