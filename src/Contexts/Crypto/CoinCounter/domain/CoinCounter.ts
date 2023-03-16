import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { CoinCounterId } from './value-object/CoinCounterId';
import { Counter } from './value-object/Counter';
import { Uuid } from '../../../Shared/domain/value-object/Uuid';

export class CoinCounter extends AggregateRoot {
  constructor(readonly id: CoinCounterId, readonly counterValue: Counter) {
    super();
  }

  static create(): CoinCounter {
    return new CoinCounter(CoinCounterId.fromString(Uuid.random().value), Counter.zero());
  }

  static from(id: CoinCounterId, counterValue: Counter) {
    return new CoinCounter(id, counterValue);
  }

  increment(): CoinCounter {
    return new CoinCounter(this.id, this.counterValue.increment());
  }

  toPrimitives(): Object {
    return {
      id: this.id.value,
      value: this.counterValue.value
    };
  }
}
