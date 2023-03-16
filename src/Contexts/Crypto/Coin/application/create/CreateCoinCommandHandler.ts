import { CommandHandler } from '../../../../Shared/domain/CommandHandler';
import { CreateCoinCommand } from './CreateCoinCommand';
import { Command } from '../../../../Shared/domain/Command';
import { CoinCreator } from './CoinCreator';
import { CoinId } from '../../domain/value-object/CoinId';
import { CoinName } from '../../domain/value-object/CoinName';
import { CoinPrice } from '../../domain/value-object/CoinPrice';

export class CreateCoinCommandHandler implements CommandHandler<CreateCoinCommand> {
  constructor(private readonly coinCreator: CoinCreator) {}
  async handle(command: CreateCoinCommand): Promise<void> {
    await this.coinCreator.run(
      CoinId.fromString(command.id),
      CoinName.fromString(command.name),
      CoinPrice.fromString(command.price)
    );
  }

  subscribedTo(): Command {
    return CreateCoinCommand;
  }
}
