import { Server } from './server';
import cryptoConfig from '../../../Contexts/Crypto/Shared/infrastructure/config';
import container from './dependency-injection';
import { EventBus } from '../../../Contexts/Shared/domain/EventBus';
import { DomainEventSubscriber } from '../../../Contexts/Shared/domain/DomainEventSubscriber';
import { DomainEvent } from '../../../Contexts/Shared/domain/DomainEvent';

export class CryptoBackendApp {
  server?: Server;

  async start() {
    this.server = new Server(cryptoConfig.get('app').port);
    await this.registerEventSubscribers();
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }

  private async registerEventSubscribers() {
    const eventBus = container.get<EventBus>('Shared.EventBus');
    const subscriberDefinitions = container.findTaggedServiceIds('domainEventSubscriber');
    const subscribers: Array<DomainEventSubscriber<DomainEvent>> = [];

    for (const [key] of subscriberDefinitions.entries()) {
      subscribers.push(container.get(key));
    }

    eventBus.addSubscribers(subscribers);

    await eventBus.start();
  }
}
