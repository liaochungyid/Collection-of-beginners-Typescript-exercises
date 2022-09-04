const ISVALIDOPERATION = /^What is(plus|minus|multiplied by|divided by|\s|-?\d)*\?$/;
const ISVALIDSYNTAX = /^What is (-?\d+)(?: (plus|minus|multiplied by|divided by) (-?\d+))*\?$/;
const OPERATIONPATTERN = /(plus|minus|multiplied by|divided by|-?\d+)/g;

type Functions = (a: number, b: number) => number;
const operationFunctions: Record<string, Functions> = {
  // "init": (a, b) => b,
  "plus": (a, b) => a + b,
  "minus": (a, b) => a - b,
  "multiplied by": (a, b) => a * b,
  "divided by": (a, b) => a / b,
};

export const answer = (input: string): number => {
  if (!ISVALIDOPERATION.test(input)) throw new Error('Unknown operation');
  if (!ISVALIDSYNTAX.test(input)) throw new Error('Syntax error');

  const operations: (Functions | number)[] = input.match(OPERATIONPATTERN)!.map(str => {
    const strToNum = Number(str);
    if (isNaN(strToNum)) return operationFunctions[str];
    return strToNum;
  });
  // console.log("operations: ", operations)

  // const fsm: { ans: number, operation: Functions } = { ans: 0, operation: operationFunctions["init"] };
  const fsm: { ans: number, operation: Functions } = { ans: 0, operation: operationFunctions["plus"] };

  operations.forEach(v => {
    if (typeof(v) === "number") fsm.ans = fsm.operation(fsm.ans, v)
    else fsm.operation = v
  });
  
  return fsm.ans;
}