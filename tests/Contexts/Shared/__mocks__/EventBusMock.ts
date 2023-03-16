import { EventBus } from '../../../../src/Contexts/Shared/domain/EventBus';
import { DomainEventSubscriber } from '../../../../src/Contexts/Shared/domain/DomainEventSubscriber';
import { DomainEvent } from '../../../../src/Contexts/Shared/domain/DomainEvent';

export default class EventBusMock implements EventBus {
  private publishMock = jest.fn();

  async publish(events: DomainEvent[]) {
    this.publishMock(events);
  }

  async start(): Promise<void> {}

  addSubscribers(subscribers: DomainEventSubscriber<DomainEvent>[]): void {}

  assertLastPublishedEventIs(expectedEvent: DomainEvent) {
    const publishSpyCalls = this.publishMock.mock.calls;

    expect(publishSpyCalls.length).toBeGreaterThan(0);

    const lastPublishSpyCall = publishSpyCalls[publishSpyCalls.length - 1];
    const lastPublishedEvent = lastPublishSpyCall[0][0];

    expect(this.getDataFromDomainEvent(expectedEvent)).toMatchObject(this.getDataFromDomainEvent(lastPublishedEvent));
  }

  assertIsCalledTimes(times: number) {
    expect(this.publishMock).toHaveBeenCalledTimes(times);
  }

  private getDataFromDomainEvent(event: DomainEvent) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { eventId, occurredOn, ...attributes } = event;

    return attributes;
  }
}
