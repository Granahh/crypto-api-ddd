import { CoinRepository } from '../../domain/CoinRepository';
import { CoinId } from '../../domain/value-object/CoinId';
import { CoinName } from '../../domain/value-object/CoinName';
import { CoinPrice } from '../../domain/value-object/CoinPrice';
import { AlreadyExistsError } from '../../../../Shared/domain/error/AlreadyExistsError';
import { Coin } from '../../domain/Coin';
import { EventBus } from '../../../../Shared/domain/EventBus';

export class CoinCreator {
  constructor(private readonly coinRepository: CoinRepository, private readonly eventBus: EventBus) {}

  async run(id: CoinId, name: CoinName, price: CoinPrice): Promise<void> {
    await this.guardThatCoinNotExists(id);

    const coin = Coin.create(id, name, price);
    await this.coinRepository.save(coin);

    await this.eventBus.publish(coin.pullDomainEvents());
  }

  /** @throws AlreadyExistsError */
  private async guardThatCoinNotExists(id: CoinId): Promise<void> {
    const coin = await this.coinRepository.searchById(id);

    if (coin !== null) {
      throw new AlreadyExistsError();
    }
  }
}
