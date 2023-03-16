import { CreateCoinCommand } from '../../../../../../src/Contexts/Crypto/Coin/application/create/CreateCoinCommand';
import { CoinIdMother } from '../../domain/value-object/CoinIdMother';
import { CoinNameMother } from '../../domain/value-object/CoinNameMother';
import { CoinPriceMother } from '../../domain/value-object/CoinPriceMother';

export class CreateCoinCommandMother {
  static default(): CreateCoinCommand {
    return CreateCoinCommand.create(
      CoinIdMother.default().value,
      CoinNameMother.default().value,
      CoinPriceMother.default().toString()
    );
  }
}
