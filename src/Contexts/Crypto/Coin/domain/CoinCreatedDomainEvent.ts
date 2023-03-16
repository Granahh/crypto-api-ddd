import { DomainEvent } from '../../../Shared/domain/DomainEvent';
import { Coin } from './Coin';

type CoinCreatedDomainEventAttributes = {
  readonly id: string;
  readonly name: string;
  readonly price: string;
};

export class CoinCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'crypto.coin.coin_created';
  constructor(
    id: string,
    private readonly name: string,
    private readonly price: string,
    eventId?: string,
    occurredOn?: Date
  ) {
    super(CoinCreatedDomainEvent.EVENT_NAME, id, eventId, occurredOn);
  }

  static fromDomain(coin: Coin): CoinCreatedDomainEvent {
    return new CoinCreatedDomainEvent(coin.id.value, coin.name.value, coin.price.toString());
  }
  toPrimitive(): CoinCreatedDomainEventAttributes {
    const { aggregateId, name, price } = this;
    return {
      id: aggregateId,
      name,
      price
    };
  }

  static fromPrimitives(
    aggregateId: string,
    attributes: CoinCreatedDomainEventAttributes,
    eventId: string,
    occurredOn: Date
  ): DomainEvent {
    return new CoinCreatedDomainEvent(aggregateId, attributes.name, attributes.price, eventId, occurredOn);
  }
}
