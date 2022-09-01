export function commands(num: number): string[] {
  // default array in REVERSE order
  const responses: string[] = ["jump", "close your eyes", "double blink", "wink"];
  // turn input number in to string base on 2, and padding "0" at front if its length is not 5
  // then splice into array (length is 5) and mapping each to boolean (value will be "0" or "1")
  const numToBinaryToBoolArray: boolean[] = num.toString(2).padStart(5, "0").split("").flatMap(v => v === "1");
  // filter out the default array with "numToBinaryToBoolArray",
  // it will be like [true, false, false, true, true] if the input is 19
  const result: string[] = responses.filter((_, ind) => numToBinaryToBoolArray[ind + 1]);
  // reverse the result if first element in "numToBinaryToBoolArray" is NOT true (because default array is in REVERSE order already)
  return numToBinaryToBoolArray[0] ? result : result.reverse();
}
