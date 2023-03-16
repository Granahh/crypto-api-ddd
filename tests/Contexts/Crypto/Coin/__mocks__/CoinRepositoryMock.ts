import { CoinRepository } from '../../../../../src/Contexts/Crypto/Coin/domain/CoinRepository';
import { Coin } from '../../../../../src/Contexts/Crypto/Coin/domain/Coin';

export class CoinRepositoryMock implements CoinRepository {
  private searchAllMock = jest.fn();
  private saveMock = jest.fn();
  searchAll(): Promise<Coin[]> {
    return this.searchAllMock();
  }

  save(coin: Coin): Promise<void> {
    return this.saveMock(coin);
  }

  searchAllHasBeenCalled(times: number = 1): void {
    expect(this.searchAllMock).toBeCalledTimes(times);
  }

  saveHasBeenCalled(times: number = 1): void {
    expect(this.saveMock).toBeCalledTimes(times);
  }

  assertThatSaveHasBeenCalledWith(coin: Coin): void {
    expect(this.saveMock).toBeCalledWith(coin);
  }

  searchAllShouldReturn(coins: Coin[]): void {
    this.searchAllMock.mockReturnValue(coins);
  }
}
