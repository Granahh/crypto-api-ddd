import { FloatValueObject } from '../../../../Shared/domain/value-object/FloatValueObject';

export class CoinPrice extends FloatValueObject {
  static fromNumber(value: number) {
    return new CoinPrice(value);
  }

  static fromString(value: string) {
    return new CoinPrice(Number.parseFloat(value));
  }

  toString(): string {
    return this.value.toFixed(2);
  }
}
