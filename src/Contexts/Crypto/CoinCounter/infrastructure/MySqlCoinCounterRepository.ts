import { CoinCounterRepository } from '../domain/CoinCounterRepository';
import { Nullable } from '../../../Shared/domain/Nullable';
import { CoinCounter } from '../domain/CoinCounter';
import { MySqlRepository } from '../../../Shared/infrastructure/Persistence/MySqlRepository';
import { CoinCounterId } from '../domain/value-object/CoinCounterId';
import { Counter } from '../domain/value-object/Counter';

type CoinCounterResult = {
  id: string;
  value: number;
};

export class MySqlCoinCounterRepository extends MySqlRepository implements CoinCounterRepository {
  async find(): Promise<Nullable<CoinCounter>> {
    const coinCounterResult = await this.executeQuery<CoinCounterResult>(`SELECT id, value FROM coin_counter LIMIT 1`);

    return coinCounterResult.rows.map(this.mapCoinCounter)[0] ?? null;
  }
  async save(coinCounter: CoinCounter): Promise<void> {
    await this.execute(
      `INSERT INTO coin_counter (id, value) VALUES (:id, :value) ON DUPLICATE KEY UPDATE value = :value`,
      {
        id: coinCounter.id.value,
        value: coinCounter.counterValue.value
      }
    );
  }

  private mapCoinCounter(result: CoinCounterResult): CoinCounter {
    return CoinCounter.from(CoinCounterId.fromString(result.id), Counter.fromNumber(result.value));
  }
}
