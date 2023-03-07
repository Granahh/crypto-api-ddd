import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject';

export class CoinId extends StringValueObject {

  static fromString(value: string): CoinId {
    return new CoinId(value);
  }
}
