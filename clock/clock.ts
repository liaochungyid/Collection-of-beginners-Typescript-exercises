export class Clock {
  private _hour: number;
  private _minute: number;

  constructor(hour: number, minute?: number) {
    [this._hour, this._minute] = this.resolveClockTime(hour, minute);
  }

  /*
   * customized decimal system
   * @param input - number to be executed
   * @param system - system type (e.g. 60 or 24 for minutes(sexagesimal) or hours)
   * @return [number, number], first one represents the carry, and second one represents the truncation
   * 
   */
  private customerDecimal(input: number = 0, system: number): [number, number] {
    const carry = Math.floor(input / system);
    const truncation = input % system;
    return [carry, truncation < 0 ? truncation + system : truncation];
  }

  /*
   * customized constructor, plus and minus function together
   * @param minutesModifier - to be correct sign to modify clock (e.g. 5 in plus is 5, and 5 in plus is -5)
   * @return [number, number], first one represents the carry, and second one represents the truncation
   * 
   */
  private resolveClockTime(hour: number, minute: number = 0, minutesModifier: number = 0): [number, number] {
    const [hourCarry, resultMinute] = this.customerDecimal(minute + minutesModifier, 60);
    const [_, resultHour] = this.customerDecimal(hour + hourCarry, 24);
    return [resultHour, resultMinute];
  }

  public toString(): string {
    return `${this._hour < 10 ? "0" : ""}${this._hour}:${this._minute < 10 ? "0" : ""}${this._minute}`;
  }

  public plus(minutes: number): Clock {
    const [resultHour, resultMinute] = this.resolveClockTime(this._hour, this._minute, minutes)
    return new Clock(resultHour, resultMinute)
  }

  public minus(minutes: number): Clock {
    const [resultHour, resultMinute] = this.resolveClockTime(this._hour, this._minute, -minutes)
    return new Clock(resultHour, resultMinute)
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}
