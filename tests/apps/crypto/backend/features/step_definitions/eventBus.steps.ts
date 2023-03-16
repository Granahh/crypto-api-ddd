import { Definition } from 'node-dependency-injection';
import { DomainEvent } from '../../../../../../src/Contexts/Shared/domain/DomainEvent';
import { DomainEventSubscriber } from '../../../../../../src/Contexts/Shared/domain/DomainEventSubscriber';
import { DomainEventMapping } from '../../../../../../src/Contexts/Shared/infrastructure/EventBus/DomainEventMapping';
import { DomainEventJsonDeserializer } from '../../../../../../src/Contexts/Shared/infrastructure/EventBus/DomainEventJsonDeserializer';
import { BeforeAll, Given } from 'cucumber';
import container from '../../../../../../src/apps/crypto/backend/dependency-injection';
import { InMemorySyncEventBusTest } from '../../../../../Contexts/Shared/infrastructure/EventBus/InMemorySyncEventBusTest';

let eventBus: InMemorySyncEventBusTest;
let deserializer: DomainEventJsonDeserializer;

BeforeAll(async () => {
  eventBus = container.get('Shared.EventBus');
  deserializer = buildDeserializer();
});

Given('I send an event to the event bus:', async (event: any) => {
  const domainEvent = deserializer.deserialize(event);

  await eventBus.publishTest([domainEvent!]);
});

function buildDeserializer(): DomainEventJsonDeserializer {
  const subscriberDefinitions = container.findTaggedServiceIds('domainEventSubscriber') as Iterable<{
    id: string;
    definition: Definition;
  }>;
  const subscribers: Array<DomainEventSubscriber<DomainEvent>> = [];

  for (const { id } of subscriberDefinitions) {
    subscribers.push(container.get(id));
  }

  const domainEventMapping = new DomainEventMapping(subscribers);

  return new DomainEventJsonDeserializer(domainEventMapping);
}
