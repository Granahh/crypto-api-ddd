import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject';

export class CoinName extends StringValueObject {
  static fromString(value: string): CoinName {
    return new CoinName(value);
  }
}
