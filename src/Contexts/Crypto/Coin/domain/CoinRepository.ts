import { Coin } from './Coin';
import { CoinId } from './value-object/CoinId';
import { Nullable } from '../../../Shared/domain/Nullable';

export interface CoinRepository {
  searchAll(): Promise<Coin[]>;

  searchById(id: CoinId): Promise<Nullable<Coin>>;

  save(coin: Coin): Promise<void>;
}
