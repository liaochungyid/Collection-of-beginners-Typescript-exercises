export function sum(multiples: number[], limit: number): number {
  if (!multiples.length) return 0;

  return multiples.reduce((acc, cur, ind, arr) => {
    if (!cur || cur >= limit) return acc;

    // get max multiple ratio
    const ratio = limit / cur;
    // check if is NOT integer, true: round down, false: minus 1 (otherwise last multiple will same as limit) 
    const height = ratio % 1 ? Math.floor(ratio) : ratio - 1 ;

    // using array to produce this multiple's multiples
    const sumOfmutiple = [...Array(height).keys()].reduce((accOf, curOf) => {

      // current multipled number
      const multipleOf = (curOf + 1) * cur;

      // check if already exist in previous multiple's multiples (if yes, do not add this up)
      if (arr.slice(0, ind).some(pre => !(multipleOf % pre))) return accOf;
      // (if no, add this up)
      return accOf + multipleOf;
    }, 0);

    return acc + sumOfmutiple;
  } ,0);

}
