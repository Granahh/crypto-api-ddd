import { EventBus } from '../../../../../src/Contexts/Shared/domain/EventBus';
import { DomainEvent } from '../../../../../src/Contexts/Shared/domain/DomainEvent';
import { DomainEventSubscriber } from '../../../../../src/Contexts/Shared/domain/DomainEventSubscriber';

type Subscription = {
  boundedCallback: Function;
  originalCallback: Function;
};

export class InMemorySyncEventBusTest implements EventBus {
  private subscriptions: Map<string, Array<Subscription>>;

  constructor() {
    this.subscriptions = new Map();
  }

  async start(): Promise<void> {
    // Do nothing
  }

  async publish(events: Array<DomainEvent>): Promise<void> {
    // Do nothing
  }

  async publishTest(events: Array<DomainEvent>): Promise<void> {
    const executions: any = [];
    events.map(event => {
      const subscribers = this.subscriptions.get(event.eventName);
      if (subscribers) {
        return subscribers.map(subscriber => executions.push(subscriber.boundedCallback(event)));
      }
    });

    await Promise.all(executions);
  }

  addSubscribers(subscribers: Array<DomainEventSubscriber<DomainEvent>>) {
    subscribers.map(subscriber =>
      subscriber.subscribedTo().map(event => this.subscribe(event.EVENT_NAME!, subscriber))
    );
  }
  private subscribe(topic: string, subscriber: DomainEventSubscriber<DomainEvent>): void {
    const currentSubscriptions = this.subscriptions.get(topic);
    const subscription = { boundedCallback: subscriber.on.bind(subscriber), originalCallback: subscriber.on };
    if (currentSubscriptions) {
      currentSubscriptions.push(subscription);
    } else {
      this.subscriptions.set(topic, [subscription]);
    }
  }
}
