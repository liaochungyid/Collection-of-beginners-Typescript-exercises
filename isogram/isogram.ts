export function isIsogram(input: string): boolean {
  const re = input.toLowerCase().replaceAll(/[^a-z]/g, "").split("");
  // for (let i=0; i<re.length; i++) {
  //   if (re.slice(i + 1).indexOf(re[i]) === -1) continue;
  //   return false;
  // }
  // return true;

  return new Set(re).size === re.length;
}
