import { Query } from '../../../../Shared/domain/Query';

export class SearchAllCoinsQuery implements Query {
  constructor() {}

  static create(): SearchAllCoinsQuery {
    return new SearchAllCoinsQuery();
  }
}
