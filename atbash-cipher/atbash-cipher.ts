const unchanged = "0123456789"
const plainAlphabet = "abcdefghijklmnopqrstuvwxyz" + unchanged;
const cipherAlphabet = "zyxwvutsrqponmlkjihgfedcba" + unchanged;

export function encode(plainText: string): string {
  return [...plainText.toLowerCase()]
    .map(p => cipherAlphabet[plainAlphabet.indexOf(p)] || "")
    .filter(c => c)
    .reduce((acc, cur, ind) => ind && ind % 5 === 0 ? `${acc} ${cur}` : acc + cur, "");

  // return [...plainText.toLowerCase()]
  //   .map(c => cipherAlphabet[plainAlphabet.indexOf(c)] || "")
  //   .join("")
  //   .split("")
  //   .reduce((acc, cur, ind) => ind && ind % 5 === 0 ? `${acc} ${cur}` : acc + cur, "");

  // return plainText
  //   .toLocaleLowerCase()
  //   .replaceAll(/[^a-z0-9]/g, "")
  //   .split("")
  //   .map(c => plainAlphabet.indexOf(c))
  //   .map(n => cipherAlphabet[n])
  //   .reduce((acc, cur, curInd) => {
  //     if (curInd && curInd % 5 === 0) return acc + " " + cur;
  //     return acc + cur;
  //   }, "");
}

export function decode(cipherText: string): string {
  return [...cipherText.toLocaleLowerCase()]
    .map(c => plainAlphabet[cipherAlphabet.indexOf(c)] || "")
    .join("");
    
  // return cipherText
  // .toLocaleLowerCase()
  // .replaceAll(/[^a-z0-9]/g, "")
  // .split("")
  // .map(c => cipherAlphabet.indexOf(c))
  // .map(n => plainAlphabet[n])
  // .join("");
}
