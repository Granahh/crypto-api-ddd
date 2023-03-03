import { SearchAllCoinsQuery } from '../../../../../../src/Contexts/Crypto/Coin/application/searchAll/SearchAllCoinsQuery';

export class SearchAllCoinsQueryMother {
  static default(): SearchAllCoinsQuery {
    return SearchAllCoinsQuery.create();
  }
}
