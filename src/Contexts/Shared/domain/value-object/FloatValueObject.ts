import { InvalidArgumentError } from '../error/InvalidArgumentError';

export abstract class FloatValueObject {
  protected constructor(readonly value: number) {
    this.ensureIsNotUndefined();
    this.ensureIsNotNull();
    this.ensureIsANumber();
  }

  equalsTo(other: FloatValueObject): boolean {
    return this.value === other.value;
  }

  isBiggerThan(other: FloatValueObject): boolean {
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
}
