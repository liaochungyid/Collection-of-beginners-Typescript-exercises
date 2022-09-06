const Roman: {[key: string]: number} = {"M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1}

export const toRoman = (input: number): string => {
  // let result = "";
  // for (let [key, value] of Object.entries(Roman)) {
  //   result += key.repeat(input / value);
  //   input %= value;
  // }
  // return result;
  
  return Object.entries(Roman).reduce((acc, [key, value]) => {
    const res = acc + key.repeat(input / value);
    input %= value;
    return res;
  } , "");
}
