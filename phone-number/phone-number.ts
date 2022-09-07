export function clean(phone: string): string {
  if (/[^0-9 ().+\-a-zA-Z]/.test(phone)) throw new Error('Punctuations not permitted');
  if (/[^0-9 ().+-]/.test(phone)) throw new Error('Letters not permitted');

  const numbers: string =  phone.replaceAll(/(?:[^0-9]*)/g, "");

  if (numbers.length < 10) throw new Error('Incorrect number of digits');
  if (numbers.length > 11) throw new Error('More than 11 digits');

  const NANP = new RegExp(/^(?<country>^\d{0,1})(?<area>\d{3})(?<exchange>\d{7})$/, "g");
  const {country, area, exchange} = NANP.exec(numbers)!.groups!;

  if (country && country[0] !== "1") throw new Error('11 digits must start with 1');
  
  if (!/^[2-9][\d]{2}/.test(area)) {
    if (area[0] === "0") throw new Error('Area code cannot start with zero');
    throw new Error('Area code cannot start with one');
  }
  
  if (!/^[2-9][\d]{6}/.test(exchange)) {
    if (exchange[0] === "0") throw new Error('Exchange code cannot start with zero');
    throw new Error('Exchange code cannot start with one');
  }

  return `${area}${exchange}`;
}
