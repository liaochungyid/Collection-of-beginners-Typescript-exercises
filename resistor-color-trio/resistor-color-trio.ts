export function decodedResistorValue(input: string[]): string {
  const inputToNumberInString = input.map((s) => {
    switch (s) {
      case "black":
        return "0"
      case "brown":
        return "1"
      case "red":
        return "2"
      case "orange":
        return "3"
      case "yellow":
        return "4"
      case "green":
        return "5"
      case "blue":
        return "6"
      case "violet":
        return "7"
      case "grey":
        return "8"
      case "white":
        return "9"
      default:
        return ""
    }
  });
  const resultNumberInString = `${inputToNumberInString[0]}${inputToNumberInString[1]}${"0".repeat(Number(inputToNumberInString[2]))}`;
  const resultNumber = Number(resultNumberInString);

  if (resultNumber % 1000 === 0) {
    return `${resultNumber / 1000} kiloohms`;
  } else {
    return `${resultNumberInString} ohms`;
  }
}
