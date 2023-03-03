import { Request, Response } from 'express';
import { Controller } from '../Controller';
import { QueryBus } from '../../../../../Contexts/Shared/domain/QueryBus';
import { SearchAllCoinsQuery } from '../../../../../Contexts/Crypto/Coin/application/searchAll/SearchAllCoinsQuery';
import { SearchAllCoinsResponse } from '../../../../../Contexts/Crypto/Coin/application/searchAll/SearchAllCoinsResponse';
import httpStatus from 'http-status';

export class CoinsGetController implements Controller {
  constructor(private readonly queryBus: QueryBus) {}
  async run(req: Request, res: Response): Promise<void> {
    const coinsResponse = await this.queryBus.ask<SearchAllCoinsResponse>(SearchAllCoinsQuery.create());

    res.status(httpStatus.OK).send(coinsResponse.toResponse());
  }
}
