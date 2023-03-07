import { CoinRepository } from '../domain/CoinRepository';
import { Coin } from '../domain/Coin';
import { CoinId } from '../domain/value-object/CoinId';
import { CoinName } from '../domain/value-object/CoinName';
import { CoinPrice } from '../domain/value-object/CoinPrice';

export class InMemoryCoinRepository implements CoinRepository {
  async searchAll(): Promise<Coin[]> {
    return this.inMemoryValues();
  }

  private inMemoryValues(): Coin[] {
    return [
      Coin.create(CoinId.fromString('BTC'), CoinName.fromString('Bitcoin'), CoinPrice.fromNumber(23_000.00)),
      Coin.create(CoinId.fromString('ETH'), CoinName.fromString('Ethereum'), CoinPrice.fromNumber(3_000.00)),
      Coin.create(CoinId.fromString('BAT'), CoinName.fromString('Basic Attention Token'), CoinPrice.fromNumber(1.00))
    ];
  }
}
