export function count(input: string): Map<string, number> {
  // const result: Map<string, number> = new Map();
  // input.toLowerCase().trim().split(/[\s\t\n]+/g).forEach(word => {
  //   // const wordInMap = result.get(word);
  //   // result.set(word, wordInMap ? wordInMap + 1 : 1)
  //   result.set(word, result.has(word) ? result.get(word)! + 1 : 1)
  // })
  // return result;

  return input
    .toLowerCase()
    .trim()
    .split(/\s+/g)
    .reduce((acc, word) => acc.set(word, (acc.get(word) || 0) + 1 ), new Map())
}
