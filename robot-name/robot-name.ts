export class Robot {
  static nameUsed: string[] = [];
  private _name: string;

  constructor() {
    this._name = this.setName();
  }

  private setName(): string {
    let randomName = "";
    while (!randomName || Robot.nameUsed.indexOf(randomName) > 0) {
      const randomChars = Math.random().toString(36).replace(/[^a-z]+/g, '').slice(-2).toUpperCase();
      const randomNums = Math.random().toFixed(3).slice(-3);
      randomName = `${randomChars}${randomNums}`;
    }
    Robot.nameUsed.push(randomName);
    return randomName;
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    // nameUsed.splice(nameUsed.indexOf(this.name), 1);
    this._name = this.setName();
  }

  public static releaseNames(): void {
    Robot.nameUsed.splice(0);
  }
}
