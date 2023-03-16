import { InvalidArgumentError } from '../error/InvalidArgumentError';

import { v4 } from 'uuid';
import validate from 'uuid-validate';

export class Uuid {
  constructor(readonly value: string) {
    this.ensureIsValidUuid(value);
  }

  static random(): Uuid {
    return new Uuid(v4());
  }

  toString(): string {
    return this.value;
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }
}
