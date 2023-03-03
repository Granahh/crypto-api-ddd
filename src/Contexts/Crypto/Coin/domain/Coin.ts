export class Coin {
  private constructor(readonly id: string, readonly name: string, readonly price: string) {}

  static create(id: string, name: string, price: string): Coin {
    return new Coin(id, name, price);
  }
}
