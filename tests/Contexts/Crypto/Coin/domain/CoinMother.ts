import { Coin } from '../../../../../src/Contexts/Crypto/Coin/domain/Coin';
import { CoinIdMother } from './value-object/CoinIdMother';
import { CoinNameMother } from './value-object/CoinNameMother';
import { CoinPriceMother } from './value-object/CoinPriceMother';

export class CoinMother {
  static default(): Coin {
    return Coin.from(CoinIdMother.default(), CoinNameMother.default(), CoinPriceMother.default());
  }
}
