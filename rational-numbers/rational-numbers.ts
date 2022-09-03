export class Rational {
  n: number;
  d: number;

  constructor(numerator: number, denominator: number) {
    if (!denominator) throw new Error('Remove this statement and implement this function');
    this.n = numerator;
    this.d = denominator;
  }

  add(rational: Rational): Rational {
    this.n = this.n * rational.d + this.d * rational.n;
    this.d = this.d * rational.d;
    return this.reduce();
  }

  sub(rational: Rational): Rational {
    this.n = this.n * rational.d - this.d * rational.n;
    this.d = this.d * rational.d;
    return this.reduce();
  }

  mul(rational: Rational): Rational {
    this.n = this.n * rational.n;
    this.d = this.d * rational.d;
    return this.reduce();
  }

  div(rational: Rational): Rational {
    this.n = this.n * rational.d;
    this.d = this.d * rational.n;
    return this.reduce();
  }

  abs(): Rational {
    this.n = Math.abs(this.n);
    this.d = Math.abs(this.d);
    return this.reduce();
  }

  exprational(power: number): Rational {
    this.n = power < 0 ? Math.pow(this.d, power) : Math.pow(this.n, power);
    this.d = power < 0 ? Math.pow(this.n, power) : Math.pow(this.d, power);
    return this.reduce();
  }

  expreal(base: number): number {
    return Number(Math.pow(base, this.n / this.d).toPrecision(15));
  }

  reduce(): Rational {
    let [x, y] = [this.n, this.d];
    while (y) {
      [x, y] = [y, x % y];
    };
    this.n = this.n / x;
    this.d = this.d / x;
    if (this.d !== Math.abs(this.d)) {
      [this.n, this.d] = [-this.n, -this.d]
    }
    return this;
  }
}
