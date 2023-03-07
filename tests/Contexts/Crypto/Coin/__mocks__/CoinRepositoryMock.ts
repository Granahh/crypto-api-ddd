import { CoinRepository } from '../../../../../src/Contexts/Crypto/Coin/domain/CoinRepository';
import { Coin } from '../../../../../src/Contexts/Crypto/Coin/domain/Coin';

export class CoinRepositoryMock implements CoinRepository {
  private searchAllMock = jest.fn();
  searchAll(): Promise<Coin[]> {
    return this.searchAllMock();
  }

  searchAllHasBeenCalled(times: number = 1): void {
    expect(this.searchAllMock).toBeCalledTimes(times);
  }

  searchAllShouldReturn(coins: Coin[]): void {
    this.searchAllMock.mockReturnValue(coins);
  }
}
