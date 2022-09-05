// - eggs (1)
// - peanuts (2)
// - shellfish (4)
// - strawberries (8)
// - tomatoes (16)
// - chocolate (32)
// - pollen (64)
// - cats (128)
const allergies = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"].reverse()

export class Allergies {
  private readonly _allergenIndexBinary;

  constructor(allergenIndex: number) {
    this._allergenIndexBinary = (allergenIndex % 2 ** allergies.length).toString(2).padStart(8, "0");
  }

  public list(): string[] {
    return allergies.filter((_, i) => this._allergenIndexBinary[i] === "1").reverse();
  }

  public allergicTo(allergen: string): boolean {
    return this._allergenIndexBinary[allergies.indexOf(allergen)] === "1";
  }
}
