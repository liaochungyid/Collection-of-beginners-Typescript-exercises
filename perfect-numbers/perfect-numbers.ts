export function classify(input: number): "perfect" | "abundant" | "deficient" {
  if (input < 1) throw new Error("'Classification is only possible for natural numbers.'");
  if (input === 1) return "deficient";

  // const factors: number[] = [];
  // for (let i=1; i<input; i++) {
  //   if (input % i === 0) factors.push(i)
  // }
  // const sumOfFactors: number = factors.reduce((acc, cur) => acc + cur, 0) 
  
  // // take too long
  // const sumOfFactors: number = [...Array(input).keys()].map(i => {
  //   if (!i || input % i) return 0;
  //   return i;
  // }).reduce((acc, cur) => acc + cur , 0)

  // much faster than first one
  // const factors: number[] = [];
  // for (let i=1; i<Math.sqrt(input); i++) {
  //   if (input % i === 0) {
  //     factors.push(i);
  //     factors.push(input / i);
  //   }
  // }
  // const sumOfFactors: number = factors.reduce((acc, cur) => acc + cur, 0) - input

  let sumOfFactors: number = -input;
  for (let i=1; i<Math.sqrt(input); i++) {
    if (input % i === 0) sumOfFactors += (i + input / i);
  } 

  if (sumOfFactors > input) return "abundant";
  if (sumOfFactors < input) return "deficient";
  return "perfect";

}
