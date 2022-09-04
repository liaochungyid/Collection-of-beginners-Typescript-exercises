const colorList = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

export function decodedResistorValue(input: string[]): string {
  // const inputToNumberList: number[] = input.map((s) => colorList.indexOf(s));
  // const resultNumber = Number(`${inputToNumberList[0]}${inputToNumberList[1]}${"0".repeat(inputToNumberList[2])}`);
  
  const [first, second, third]: number[] = input.map((s) => colorList.indexOf(s));
  const resultNumber = (first * 10 + second) * Math.pow(10, third);

  if (resultNumber % 1000 === 0) {
    return `${resultNumber / 1000} kiloohms`;
  } else {
    return `${resultNumber} ohms`;
  }
}
