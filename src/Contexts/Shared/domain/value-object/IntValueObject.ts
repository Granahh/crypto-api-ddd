import { InvalidArgumentError } from '../error/InvalidArgumentError';

export abstract class IntValueObject {
  protected constructor(readonly value: number) {
    this.ensureIsNotUndefined();
    this.ensureIsNotNull();
    this.ensureIsANumber();
    this.ensureIsAnInteger();
  }

  equalsTo(other: IntValueObject): boolean {
    return this.value === other.value;
  }

  isBiggerThan(other: IntValueObject): boolean {
    return this.value > other.value;
  }

  private ensureIsNotUndefined(): void {
    if (this.value === undefined) {
      throw InvalidArgumentError.withMessage('The value cannot be undefined');
    }
  }

  private ensureIsNotNull(): void {
    if (this.value === null) {
      throw InvalidArgumentError.withMessage('The value cannot be null');
    }
  }

  private ensureIsANumber() {
    if (isNaN(this.value)) {
      throw InvalidArgumentError.withMessage('The value must be a number');
    }
  }
  private ensureIsAnInteger() {
    if (!Number.isInteger(this.value)) {
      throw InvalidArgumentError.withMessage('The value must be an integer');
    }
  }
}
