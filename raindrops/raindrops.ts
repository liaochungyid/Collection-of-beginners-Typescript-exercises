export function convert(input: number): string {
  // const [mod3, mod5, mod7] = [input % 3, input % 5, input % 7];
  // if (mod3 && mod5 && mod7) return input.toString();
  // return `${!mod3 ? "Pling" : ""}${!mod5 ? "Plang" : ""}${!mod7 ? "Plong" : ""}`;
  
  return [
    {
      d: 3,
      s: "Pling"
    },
    {
      d: 5,
      s: "Plang"
    },
    {
      d: 7,
      s: "Plong"
    }
  ].map((val) => input % val.d ? "" : val.s).join("") || input.toString();
}
