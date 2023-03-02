import { Command } from '../../domain/Command';
import { CommandHandler } from '../../domain/CommandHandler';
import { CommandNotRegisteredError } from '../../domain/CommandNotRegisteredError';

export class CommandHandlersInformation {
  private commandHandlersMap: Map<Command, CommandHandler<Command>>;

  constructor(commandHandlers: Array<CommandHandler<Command>>) {
    this.commandHandlersMap = this.formatHandlers(commandHandlers);
  }

  public search(command: Command): CommandHandler<Command> {
    const commandHandler = this.commandHandlersMap.get(command.constructor);

    if (!commandHandler) {
      throw new CommandNotRegisteredError(command);
    }

    return commandHandler;
  }

  private formatHandlers(commandHandlers: Array<CommandHandler<Command>>): Map<Command, CommandHandler<Command>> {
    const handlersMap = new Map();

    commandHandlers.forEach(commandHandler => {
      handlersMap.set(commandHandler.subscribedTo(), commandHandler);
    });

    return handlersMap;
  }
}
