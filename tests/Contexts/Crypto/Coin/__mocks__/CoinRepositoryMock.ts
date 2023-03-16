import { CoinRepository } from '../../../../../src/Contexts/Crypto/Coin/domain/CoinRepository';
import { Coin } from '../../../../../src/Contexts/Crypto/Coin/domain/Coin';
import { CoinId } from '../../../../../src/Contexts/Crypto/Coin/domain/value-object/CoinId';
import { Nullable } from '../../../../../src/Contexts/Shared/domain/Nullable';

export class CoinRepositoryMock implements CoinRepository {
  private searchAllMock = jest.fn();
  private saveMock = jest.fn();
  private searchByIdMock = jest.fn();
  searchAll(): Promise<Coin[]> {
    return this.searchAllMock();
  }

  save(coin: Coin): Promise<void> {
    return this.saveMock(coin);
  }

  searchById(id: CoinId): Promise<Nullable<Coin>> {
    return this.searchByIdMock(id);
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

  searchByIdHasBeenCalled(times: number = 1): void {
    expect(this.searchByIdMock).toBeCalledTimes(times);
  }

  assertThatSearchByIdHasBeenCalledWith(coinId: CoinId): void {
    expect(this.searchByIdMock).toBeCalledWith(coinId);
  }

  searchByIdShouldReturn(coin: Nullable<Coin>): void {
    this.searchByIdMock.mockReturnValue(coin);
  }

  searchAllShouldReturn(coins: Coin[]): void {
    this.searchAllMock.mockReturnValue(coins);
  }
}
