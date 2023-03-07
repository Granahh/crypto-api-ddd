import { Coin } from '../../domain/Coin';
import { CoinRepository } from '../../domain/CoinRepository';

export class AllCoinsSearcher {
  constructor(private readonly coinRepository: CoinRepository) {}

  async run(): Promise<Coin[]> {
    return await this.coinRepository.searchAll();
  }
}
