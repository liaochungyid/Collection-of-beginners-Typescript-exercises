export function parse(phrase: string): string {
  // const arr = phrase.match(/(?:[A-Z]|[ -][a-z])|(?:[:].*)/g) || [];
  // const res = arr.map(c =>  c.indexOf(":") === -1 ? c.replaceAll(/[ -]/g, "").toUpperCase() : "");
  // return res.join("");
  
  return (phrase.match(/(?:[A-Z]|[ -][a-z])|(?:[:].*)/g) || [])
    .reduce((acc, cur) =>  {
      if (cur.indexOf(":") !== -1) return acc;
      return acc + cur.replaceAll(/[ -]/g, "").toUpperCase();
    }, "");
}
