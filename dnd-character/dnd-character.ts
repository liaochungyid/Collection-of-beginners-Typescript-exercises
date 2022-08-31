export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    const randomArr = Array.from({ length: 4 }).map(() => Math.ceil(Math.random() * 6) )
    const smallestNumberIndex = randomArr.indexOf(Math.min(...randomArr));
    return randomArr.reduce((acc, cur, ind) => ind === smallestNumberIndex ? acc : acc + cur, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor( (abilityValue - 10) / 2 );
  }

}
