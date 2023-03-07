import { InvalidArgumentError } from '../error/InvalidArgumentError';

export abstract class StringValueObject {
  protected constructor(readonly value: string) {
    this.ensureIsNotUndefined();
    this.ensureIsNotNull();
    this.ensureIsString();
  }

  private ensureIsNotUndefined(): void {
    if (this.value === undefined) { throw InvalidArgumentError.withMessage('The value cannot be undefined'); }
  }

  private ensureIsNotNull(): void {
    if (this.value === null) { throw InvalidArgumentError.withMessage('The value cannot be null'); }
  }

  private ensureIsString() {
    if (typeof this.value !== 'string') { throw InvalidArgumentError.withMessage('The value must be a string'); }
  }
}
