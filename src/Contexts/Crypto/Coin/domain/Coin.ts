import { CoinPrice } from './value-object/CoinPrice';
import { CoinName } from './value-object/CoinName';
import { CoinId } from './value-object/CoinId';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { CoinCreatedDomainEvent } from './CoinCreatedDomainEvent';

export class Coin extends AggregateRoot {
  private constructor(readonly id: CoinId, readonly name: CoinName, readonly price: CoinPrice) {
    super();
  }

  static from(id: CoinId, name: CoinName, price: CoinPrice): Coin {
    return new Coin(id, name, price);
  }

  static create(id: CoinId, name: CoinName, price: CoinPrice): Coin {
    const coin = new Coin(id, name, price);

    coin.record(CoinCreatedDomainEvent.fromDomain(coin));

    return coin;
  }

  toPrimitives(): Object {
    return {
      id: this.id.value,
      name: this.name.value,
      price: this.price.toString()
    };
  }
}
