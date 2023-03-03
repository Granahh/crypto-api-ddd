import { Response } from '../../../Shared/domain/Response';

type CoinResponseItem = {
  id: string;
  name: string;
  price: string;
};
export class SearchAllCoinsResponse implements Response {
  constructor(private readonly coins: CoinResponseItem[]) {}

  static fromDomain(coins: CoinResponseItem[]) {
    return new SearchAllCoinsResponse(coins);
  }

  toResponse(): { coins: CoinResponseItem[] } {
    return {
      coins: this.coins
    };
  }
}
