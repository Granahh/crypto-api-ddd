import { Command } from '../../../../Shared/domain/Command';

export class CreateCoinCommand implements Command {
  constructor(readonly id: string, readonly name: string, readonly price: string) {}

  static create(id: string, name: string, price: string): CreateCoinCommand {
    return new CreateCoinCommand(id, name, price);
  }
}
