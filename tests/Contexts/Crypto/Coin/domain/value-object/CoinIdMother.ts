import { CoinId } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinId';

export class CoinIdMother {
  static default(): CoinId {
    return CoinId.fromString('BTC');
  }
}
