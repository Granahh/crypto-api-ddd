import { Request, Response } from 'express';
import { Controller } from '../Controller';
import { CommandBus } from '../../../../../Contexts/Shared/domain/CommandBus';
import { CreateCoinCommand } from '../../../../../Contexts/Crypto/Coin/application/create/CreateCoinCommand';
import { AlreadyExistsError } from '../../../../../Contexts/Shared/domain/error/AlreadyExistsError';
import httpStatus from 'http-status';

export class CoinPutController implements Controller {
  constructor(private readonly commandBus: CommandBus) {}
  async run(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, price } = req.body;

      await this.commandBus.dispatch(CreateCoinCommand.create(id, name, price));

      res.status(httpStatus.CREATED).send();
    } catch (error) {
      switch (true) {
        case error instanceof AlreadyExistsError:
          res.status(httpStatus.CONFLICT).send();
          break;
        default:
          res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
          break;
      }
    }
  }
}
