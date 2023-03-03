import { Response } from '../../../../Shared/domain/Response';
import { Coin } from '../../domain/Coin';

type CoinResponseItem = {
  id: string;
  name: string;
  price: string;
};
export class SearchAllCoinsResponse implements Response {
  constructor(private readonly coins: CoinResponseItem[]) {}

  static fromDomain(coins: Coin[]) {
    return new SearchAllCoinsResponse(coins.map(this.mapCoin));
  }

  private static mapCoin(coin: Coin): CoinResponseItem {
    return {
      id: coin.id,
      name: coin.name,
      price: coin.price
    };
  }

  toResponse(): { coins: CoinResponseItem[] } {
    return {
      coins: this.coins
    };
  }
}
