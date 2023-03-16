export class Counter {
  private constructor(readonly value: number) {}

  static fromNumber(value: number): Counter {
    return new Counter(value);
  }

  static zero(): Counter {
    return Counter.fromNumber(0);
  }

  increment(): Counter {
    return Counter.fromNumber(this.value + 1);
  }
}
