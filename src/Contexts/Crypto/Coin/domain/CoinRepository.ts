import { Coin } from './Coin';

export interface CoinRepository {
  searchAll(): Promise<Coin[]>;
}
