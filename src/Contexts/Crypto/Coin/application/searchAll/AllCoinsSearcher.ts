import { Coin } from '../../domain/Coin';

export class AllCoinsSearcher {
  constructor() {}

  async run(): Promise<Coin[]> {
    return [
      Coin.create('BTC', 'Bitcoin', '23000'),
      Coin.create('ETH', 'Ethereum', '3000'),
      Coin.create('BAT', 'Basic Attention Token', '1')
    ];
  }
}
