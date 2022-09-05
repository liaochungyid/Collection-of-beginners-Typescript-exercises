export function compute(left: string, right: string): number {
  if (left.length - right.length) throw new Error("DNA strands must be of equal length.");
  return left.split("").reduce((acc, cur, ind) => cur === right[ind] ? acc : acc + 1, 0);
}
