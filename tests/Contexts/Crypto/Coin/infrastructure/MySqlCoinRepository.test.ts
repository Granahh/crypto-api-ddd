import { Coin } from '../../../../../src/Contexts/Crypto/Coin/domain/Coin';
import { CoinId } from '../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinId';
import { CoinName } from '../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinName';
import { CoinPrice } from '../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinPrice';
import container from '../../../../../src/apps/crypto/backend/dependency-injection';
import { MySqlCoinRepository } from '../../../../../src/Contexts/Crypto/Coin/infrastructure/MySqlCoinRepository';
import { EnvironmentArranger } from '../../../Shared/infrastructure/Arranger/EnvironmentArranger';

let mySqlCoinRepository: MySqlCoinRepository;
let arranger: EnvironmentArranger;
beforeAll(async () => {
  arranger = container.get<EnvironmentArranger>('Shared.EnvironmentArranger');
  await arranger.run();
  mySqlCoinRepository = container.get('Coin.CoinRepository');

  await setUpDatabase();
});

afterAll(async () => {
  await arranger.stop();
});

describe('MySqlCoinRepository', () => {
  it('should return all coins', async () => {
    const resultCoins = await mySqlCoinRepository.searchAll();

    expect(resultCoins).toEqual(expect.arrayContaining(coins()));
  });

  it('should save a coin', async () => {
    await expect(
      mySqlCoinRepository.save(
        Coin.create(CoinId.fromString('NEW_COIN_ID'), CoinName.fromString('NEW_COIN'), CoinPrice.fromNumber(1))
      )
    ).resolves.not.toThrow();
  });
});

function coins(): Coin[] {
  return [
    Coin.create(CoinId.fromString('BTC'), CoinName.fromString('Bitcoin'), CoinPrice.fromNumber(23_000.0)),
    Coin.create(CoinId.fromString('ETH'), CoinName.fromString('Ethereum'), CoinPrice.fromNumber(3_000.0)),
    Coin.create(CoinId.fromString('BAT'), CoinName.fromString('Basic Attention Token'), CoinPrice.fromNumber(1.0))
  ];
}

async function setUpDatabase(): Promise<void> {
  for (const coin of coins()) {
    await mySqlCoinRepository.save(coin);
  }
}
