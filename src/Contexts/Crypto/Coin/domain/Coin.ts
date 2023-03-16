import { CoinPrice } from './value-object/CoinPrice';
import { CoinName } from './value-object/CoinName';
import { CoinId } from './value-object/CoinId';

export class Coin {
  private constructor(readonly id: CoinId, readonly name: CoinName, readonly price: CoinPrice) {}

  static from(id: CoinId, name: CoinName, price: CoinPrice): Coin {
    return new Coin(id, name, price);
  }

  static create(id: CoinId, name: CoinName, price: CoinPrice): Coin {
    return new Coin(id, name, price);
  }
}
