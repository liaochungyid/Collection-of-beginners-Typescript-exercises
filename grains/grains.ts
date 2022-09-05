export const square = (input: number): bigint => {
  if (input < 1 || input > 64) throw new Error();
  
  // return BigInt(Math.pow(2, input - 1));

  return 2n ** BigInt(input - 1);
}

export const total = (): bigint => {
  // return [...Array(64).keys()].reduce((acc, cur) => acc + square(cur + 1), BigInt(0));

  // https://en.wikipedia.org/wiki/Geometric_progression
  // return 1n * (1n - 2n ** 64n) / (1n - 2n);
  // to simplify
  return 2n ** 64n - 1n;
}
