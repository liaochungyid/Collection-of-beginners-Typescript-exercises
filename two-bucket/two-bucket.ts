type BucketPair = [number, number]

export class TwoBucket {
  private _moves = NaN;
  private _goalBucket: "one" | "two" | "" = "";
  private _otherBucket = NaN;

  constructor(
    buckOne: number,
    buckTwo: number,
    private goal: number,
    private starterBuck: "one" | "two"
  ) {
    if ((goal === buckOne && this.starterBuck === "one") || (goal === buckTwo && this.starterBuck === "two")) {
      this._goalBucket = this.starterBuck === "one" ? "one" : "two";
      this._moves = 1;
      this._otherBucket = 0;
    } else if ((goal === buckOne && this.starterBuck === "two") || (goal === buckTwo && this.starterBuck === "one")) {
      this._goalBucket = this.starterBuck === "one" ? "two" : "one";
      this._moves = 2;
      this._otherBucket = buckOne;
    } else if (goal % this.gcd(buckOne, buckTwo) === 0 && (goal < buckOne || goal < buckTwo)) {
      if (starterBuck === "one") {
        this._moves = this.nextStep(0, 0, buckOne, buckTwo)
      } else if (starterBuck === "two") {
        this._moves = this.nextStep(0, 0, buckTwo, buckOne)
      }
    }
  }

  private nextStep(a: number, b: number, al: number, bl: number): number {
    if (a === this.goal || b === this.goal) {
      if (this.starterBuck === "one") {
        this._goalBucket = a === this.goal ? "one" : "two";
      } else {
        this._goalBucket = a === this.goal ? "two" : "one";
      }
      this._otherBucket = a === this.goal ? b : a;
      return 0
    }
    if (b === bl) return 1 + this.nextStep(a, 0, al, bl);
    if (!a && !b) return 1 + this.nextStep(al, 0, al, bl);
    if (!a && b) return 1 + this.nextStep(al, b, al, bl);
    if (b + a > bl) return 1 + this.nextStep(a - bl + b, bl, al, bl);
    return 1 + this.nextStep(0 , b + a, al, bl);
  }

  private gcd(a: number, b: number): number {
    if (!b) return a;
    return this.gcd(b, a % b);
  }

  moves(): number {
    if (isNaN(this._moves)) throw new Error();
    return this._moves;
  }

  get goalBucket(): string {
    if (!this._goalBucket) throw new Error();
    return this._goalBucket;
  }

  get otherBucket(): number {
    if (isNaN(this._otherBucket)) throw new Error();
    return this._otherBucket;
  }
}
