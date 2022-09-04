export class List {
  private list: unknown[];

  constructor(_values: unknown[] = []) {
    this.list = _values;
  }

  get values(): unknown[] {
    return this.list;
  }

  public static create(...values: unknown[]): unknown {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.
    return new List(values);
  }

  public forEach(cb: Function): void {
    const [first, ...rest] = this.list;
    const restList = new List(rest);
    if (first) {
      cb(first);
      restList.forEach(cb);
    }
  }
}
