import { CoinPrice } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinPrice';

export class CoinPriceMother {
  static default(): CoinPrice {
    return CoinPrice.fromString('23000');
  }
}
