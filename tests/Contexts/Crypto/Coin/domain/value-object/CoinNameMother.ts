import { CoinName } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinName';

export class CoinNameMother {
  static default(): CoinName {
    return CoinName.fromString('Bitcoin');
  }
}
