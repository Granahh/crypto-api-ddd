import { Uuid } from '../../../../Shared/domain/value-object/Uuid';

export class CoinCounterId extends Uuid {
  private constructor(value: string) {
    super(value);
  }

  static fromString(value: string): CoinCounterId {
    return new CoinCounterId(value);
  }
}
