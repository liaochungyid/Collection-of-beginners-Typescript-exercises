type IAnagram = {[key: string]: number}

export class Anagram {
  public readonly anagram: IAnagram;

  constructor(public readonly input: string) {
    this.anagram = input.toLowerCase().split("").reduce((acc, cur) => {
      Object.hasOwn(acc, cur) ? acc[cur] += 1 : acc[cur] = 1;
      return acc;
    }, {} as IAnagram)
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter(potential => {

      if (potential.length !== this.input.length) return false;
      if (potential.toLowerCase() === this.input) return false;

      const potentialAnagram = new Anagram(potential).anagram;
      
      return Object.keys(potentialAnagram).every(key => {
        return Object.hasOwn(this.anagram, key) && potentialAnagram[key] <= this.anagram[key] 
      })
    })
  }
}
