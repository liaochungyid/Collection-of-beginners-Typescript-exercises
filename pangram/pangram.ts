interface A2Z_MAP {
  [key: string]: number
}

export function isPangram(sentence: string): boolean {
  // // to make input case insensitive
  // const sentenceInLowerCase: string = sentence.toLocaleLowerCase();

  // // produce char array to test
  // const a2zArr: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

  // // init the char map
  // const a2zMap: A2Z_MAP = {};
  // a2zArr.forEach(c => a2zMap[c] = 0);

  // // walk through each char, and add in to map if match
  // sentenceInLowerCase.split("").forEach(c => {
  //   if (c in a2zMap) a2zMap[c] += 1;
  // });

  // // detemine if each char in char array showed at least one time (return 0 will be falsy)
  // return a2zArr.every(c => a2zMap[c]);

  // solution from bobahop (https://exercism.org/tracks/typescript/exercises/pangram/solutions/bobahop)
  sentence = sentence.toLocaleLowerCase();
  return [..."abcdefghijklmnopqrstuvwxyz"].every(l => sentence.includes(l));
}
