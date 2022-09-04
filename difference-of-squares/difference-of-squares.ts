export class Squares {

  constructor(private count: number) {
    this.count = count
  }

  get sumOfSquares(): number {
    // return [...Array(this.count).keys()]
    //   .map((v) => Math.pow(v + 1, 2))
    //   .reduce((acc, cur) => acc + cur, 0);
    
    return this.count * (this.count + 1) * (2 * this.count + 1) / 6;
  }

  get squareOfSum(): number {
    // return Math.pow(
    //   [...Array(this.count).keys()].reduce((acc: number, cur) => acc + cur, this.count),
    //   2
    // );

    return Math.pow(this.count * (1 + this.count) / 2, 2)
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}
