import { Coin } from './Coin';

export interface CoinRepository {
  searchAll(): Promise<Coin[]>;

  save(coin: Coin): Promise<void>;
}
