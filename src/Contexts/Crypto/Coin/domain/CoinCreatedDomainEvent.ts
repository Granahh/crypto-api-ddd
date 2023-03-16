import { DomainEvent } from '../../../Shared/domain/DomainEvent';
import { Coin } from './Coin';
import { Uuid } from '../../../Shared/domain/value-object/Uuid';

export class CoinCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'crypto.coin.1.coin_created';
  constructor(private readonly id: string, private readonly name: string, private readonly price: string) {
    super(CoinCreatedDomainEvent.EVENT_NAME, Uuid.random().toString());
  }

  static fromDomain(coin: Coin): CoinCreatedDomainEvent {
    return new CoinCreatedDomainEvent(coin.id.value, coin.name.value, coin.price.toString());
  }
  toPrimitive(): Object {
    return {
      id: this.id,
      name: this.name,
      price: this.price.toString(),
      eventName: CoinCreatedDomainEvent.EVENT_NAME
    };
  }
}
