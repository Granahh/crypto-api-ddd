import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { SearchAllCoinsResponse } from './SearchAllCoinsResponse';
import { SearchAllCoinsQuery } from './SearchAllCoinsQuery';
import { Query } from '../../../../Shared/domain/Query';
import { AllCoinsSearcher } from './AllCoinsSearcher';

export class SearchAllCoinsQueryHandler implements QueryHandler<SearchAllCoinsQuery, SearchAllCoinsResponse> {
  constructor(private readonly searcherCoins: AllCoinsSearcher) {}

  async handle(query: SearchAllCoinsQuery): Promise<SearchAllCoinsResponse> {
    const coins = await this.searcherCoins.run();

    return SearchAllCoinsResponse.fromDomain(coins);
  }

  subscribedTo(): Query {
    return SearchAllCoinsQuery;
  }
}
