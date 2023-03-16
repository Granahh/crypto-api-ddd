import { CoinRepository } from '../domain/CoinRepository';
import { MySqlRepository } from '../../../Shared/infrastructure/Persistence/MySqlRepository';
import { Coin } from '../domain/Coin';
import { CoinId } from '../domain/value-object/CoinId';
import { CoinName } from '../domain/value-object/CoinName';
import { CoinPrice } from '../domain/value-object/CoinPrice';
import { Nullable } from '../../../Shared/domain/Nullable';

type CoinResult = {
  id: string;
  name: string;
  price: string;
};
export class MySqlCoinRepository extends MySqlRepository implements CoinRepository {
  async searchAll(): Promise<Coin[]> {
    const coinsResult = await this.executeQuery<CoinResult>(`SELECT id, name, price FROM coin ORDER BY id`);

    return coinsResult.rows.map(this.mapCoin);
  }

  async searchById(id: CoinId): Promise<Nullable<Coin>> {
    const coinResult = await this.executeQuery<CoinResult>(`SELECT id, name, price FROM coin WHERE id = :id`, {
      id: id.value
    });

    return coinResult.rows.map(this.mapCoin)[0] ?? null;
  }

  async save(coin: Coin): Promise<void> {
    await this.execute(`INSERT INTO coin (id, name, price) VALUES (:id, :name, :price)`, {
      id: coin.id.value,
      name: coin.name.value,
      price: coin.price.value
    });
  }

  private mapCoin(result: CoinResult): Coin {
    return Coin.from(
      CoinId.fromString(result.id),
      CoinName.fromString(result.name),
      CoinPrice.fromString(result.price)
    );
  }
}
