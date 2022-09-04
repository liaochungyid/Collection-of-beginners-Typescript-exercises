const colorList = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export function decodedValue(input: string[]) {
  const [first, second] = input.map((s) => colorList.indexOf(s));
  return first * 10 + second;
}
