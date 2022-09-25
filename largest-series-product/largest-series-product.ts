export const largestProduct = (series: string, n: number): number => {
  if (n < 0) throw new Error('Span must be greater than zero');
  if (n === 0) return 1;
  if (n > series.length) throw new Error('Span must be smaller than string length');
  if (!/^[\d]+$/g.test(series)) throw new Error('Digits input must only contain digits');

  let max = 0;
  const arr: number[] = [];
  for (let c of series.split('')) {
    arr.push(parseInt(c));
    if (arr.length < n) continue;
    if (arr.length > n) arr.shift();
    const prod = arr.reduce((acc, cur) => acc * cur, 1)
    if (prod > max)  max = prod;
  }
  return max;
}
