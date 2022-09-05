export class ComplexNumber {
  constructor(private _real: number, private _imaginary: number) {}

  public get real(): number {
    return this._real;
  }

  public get imag(): number {
    return this._imaginary;
  }

  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real + other.real, this._imaginary + other.imag);
  }

  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real - other.real, this._imaginary - other.imag);
  }

  public div(other: ComplexNumber): ComplexNumber {
    const numeratorReal = ( this._real * other.real + this._imaginary * other.imag )
    const numeratorImag = ( this._imaginary * other.real - this._real * other.imag )
    const denominator = other.real ** 2 + other.imag ** 2
    return new ComplexNumber(numeratorReal / denominator, numeratorImag / denominator);
  }
  
  public mul(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real * other.real - this._imaginary * other.imag, this._imaginary * other.real + this._real * other.imag);
  }

  public get abs(): number {
    return Math.sqrt(this._real ** 2 + this._imaginary ** 2);
  }

  // https://stackoverflow.com/questions/7223359/are-0-and-0-the-same
  public get conj(): ComplexNumber {
    return new ComplexNumber(this._real, !this._imaginary ? 0 : -this._imaginary);
  }

  // https://en.wikipedia.org/wiki/Complex_number
  public get exp(): ComplexNumber {
    return new ComplexNumber(Math.exp(this._real) * Math.cos(this._imaginary), Math.exp(this._real) * Math.sin(this._imaginary));
  }

}
