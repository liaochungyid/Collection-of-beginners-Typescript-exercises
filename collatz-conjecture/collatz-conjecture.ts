export function steps(count: number): number {
  if (count < 1) throw new Error("Only positive numbers are allowed");
  if (count === 1) return 0;
  return 1 + steps(count % 2 ? 3 * count + 1 : count / 2);
}
