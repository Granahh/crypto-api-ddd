import { Given } from 'cucumber';
import container from '../../../../../../src/apps/crypto/backend/dependency-injection';
import { CoinRepository } from '../../../../../../src/Contexts/Crypto/Coin/domain/CoinRepository';
import { Coin } from '../../../../../../src/Contexts/Crypto/Coin/domain/Coin';
import { CoinId } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinId';
import { CoinName } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinName';
import { CoinPrice } from '../../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinPrice';

Given('There is a coin:', async (coin: any) => {
  const coinRepository = container.get<CoinRepository>('Coin.CoinRepository');

  const { id, name, price } = JSON.parse(coin);

  await coinRepository.save(Coin.from(CoinId.fromString(id), CoinName.fromString(name), CoinPrice.fromString(price)));
});
