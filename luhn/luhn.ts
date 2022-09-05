export function valid(digitString: string): boolean {
  if (!/^[0-9][0-9\s]*$/.test(digitString)) return false;
  
  const pureNumbers: string = digitString.replaceAll(/[\s]/g, "");

  if (digitString.length < 2) return false;

  const resolveNumber: number = pureNumbers
    .split("")
    .map(v => Number(v))
    .reverse()
    .reduce((acc, cur, ind) => {
      if (ind % 2) return acc + ((cur * 2) % 9 || 9);
      return acc + cur;
    }, 0) % 10;

  return !resolveNumber;
}
