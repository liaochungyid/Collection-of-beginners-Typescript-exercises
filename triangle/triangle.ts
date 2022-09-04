export class Triangle {
  private readonly a: number;
  private readonly b: number;
  private readonly c: number;
  private readonly _isEquilateral: boolean = false;
  private readonly _isIsosceles: boolean = false;
  private readonly _isScalene: boolean = false;
  private readonly _isDegenerate: boolean = false;

  constructor(...sides: number[]) {
    [this.a, this.b, this.c] = sides;
    // if (
    //   this.a + this.b <= this.c ||
    //   this.b + this.c <= this.a ||
    //   this.c + this.a <= this.b
    // ) {
    //   this._isDegenerate = true;
    // } else if (
    //   this.a === this.b ||
    //   this.b === this.c ||
    //   this.c === this.a
    // ) {
    //   if (this.a === this.b && this.b === this.c) this._isEquilateral = true;
    //   this._isIsosceles = true;
    // } else { 
    //   this._isScalene = true;
    // }

    this._isDegenerate = !(this.a + this.b > this.c && this.b + this.c > this.a && this.c + this.a > this.b);
    if (!this._isDegenerate) {
      const compare = [this.a === this.b, this.b === this.c, this.c === this.a] 
      this._isIsosceles = compare.some(c => c);
      this._isEquilateral = compare.every(c => c);
      this._isScalene = compare.every(c => !c);
    }

  }

  get isEquilateral(): boolean {
    return this._isEquilateral;
  }

  get isIsosceles(): boolean {
    return this._isIsosceles;
  }

  get isScalene(): boolean {
    return this._isScalene
  }
  
  get isDegenerate(): boolean {
    return this._isDegenerate;
  }
}
