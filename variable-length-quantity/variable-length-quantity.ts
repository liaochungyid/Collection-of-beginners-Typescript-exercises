const modifier = 2 ** 7;

export function encode(input: number[]): number[] {

  return input.map(hex => {

    // too much nested if-statement
    // const result = [NaN, NaN, NaN, NaN, hex % 128];
    // const restOfFirst = Math.floor(hex / 128);
    // if (restOfFirst) {
    //   result[3] = restOfFirst % 128;
    //   const restOfSecond = Math.floor(restOfFirst / 128);
    //   if (restOfSecond) {
    //     result[2] = restOfSecond % 128;
    //     const restOfThrid = Math.floor(restOfSecond / 128);
    //     if (restOfThrid) {
    //       result[1] = restOfThrid % 128;
    //       const restOfForth = Math.floor(restOfThrid / 128);
    //       if (restOfForth) {
    //         result[0] = restOfForth % 128;
    //       };
    //     };
    //   };
    // };
    // return result.map((n, i) => i === 4 ? n : n + modifier).filter((n, i) => n || i === 4);

    const result: number[] = [hex % modifier];
    let quotient = Math.floor(hex / modifier);
    while (quotient) {
      result.unshift(quotient % modifier + modifier);
      quotient = Math.floor(quotient / modifier);
    }
    return result;
  }).flat();
}

export function decode(input: number[]): number[] {
  const result: number[] = [];
  let temp = 0;
  let isEnd = true;
  for (let hex of input) {
    if (hex / modifier >= 1) {
      temp = (temp + hex % modifier) * modifier;
      isEnd = false;
    } else {
      result.push(temp + hex);
      temp = 0;
      isEnd = true;
    }
  }
  if (!isEnd) throw new Error('Incomplete sequence');
  return result;
}
