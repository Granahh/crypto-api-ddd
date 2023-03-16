import { DomainEventSubscriber } from '../../../../Shared/domain/DomainEventSubscriber';
import { CoinCreatedDomainEvent } from '../../../Coin/domain/CoinCreatedDomainEvent';
import { DomainEventClass } from '../../../../Shared/domain/DomainEvent';
import { CoinCounterIncrementor } from './CoinCounterIncrementor';

export class IncrementCoinCounterOnCoinCreated implements DomainEventSubscriber<CoinCreatedDomainEvent> {
  constructor(private readonly coinCounterIncrementor: CoinCounterIncrementor) {}
  async on(domainEvent: CoinCreatedDomainEvent): Promise<void> {
    console.log(`Processing an event: ${domainEvent.aggregateId}`);
    await this.coinCounterIncrementor.run();
  }

  subscribedTo(): Array<DomainEventClass> {
    return [CoinCreatedDomainEvent];
  }
}
