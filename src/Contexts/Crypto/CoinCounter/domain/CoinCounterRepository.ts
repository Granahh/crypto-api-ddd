import { Nullable } from '../../../Shared/domain/Nullable';
import { CoinCounter } from './CoinCounter';

export interface CoinCounterRepository {
  find(): Promise<Nullable<CoinCounter>>;
  save(coinCounter: CoinCounter): Promise<void>;
}
