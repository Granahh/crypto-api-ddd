import { Query } from './Query';

export class QueryNotRegisteredError extends Error {
  constructor(query: Query) {
    super(`The query <${query.constructor.name}> has not a query handler associated`);
  }
}
