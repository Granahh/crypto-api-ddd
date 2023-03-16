import { CoinCounterRepository } from '../../domain/CoinCounterRepository';
import { CoinCounter } from '../../domain/CoinCounter';

export class CoinCounterIncrementor {
  constructor(private readonly coinCounterRepository: CoinCounterRepository) {}

  async run(): Promise<void> {
    const coinCounter = (await this.coinCounterRepository.find()) ?? CoinCounter.create();

    await this.coinCounterRepository.save(coinCounter.increment());
  }
}
