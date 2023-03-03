import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { SearchAllCoinsResponse } from './SearchAllCoinsResponse';
import { SearchAllCoinsQuery } from './SearchAllCoinsQuery';
import { Query } from '../../../../Shared/domain/Query';

export class SearchAllCoinsQueryHandler implements QueryHandler<SearchAllCoinsQuery, SearchAllCoinsResponse> {
  constructor() {}

  async handle(query: SearchAllCoinsQuery): Promise<SearchAllCoinsResponse> {
    //TODO: Create an use case with the Domain Object Coin
    return SearchAllCoinsResponse.fromDomain([
      {
        id: 'BTC',
        name: 'Bitcoin',
        price: '23000'
      },
      {
        id: 'ETH',
        name: 'Ethereum',
        price: '13000'
      }
    ]);
  }

  subscribedTo(): Query {
    return SearchAllCoinsQuery;
  }
}
