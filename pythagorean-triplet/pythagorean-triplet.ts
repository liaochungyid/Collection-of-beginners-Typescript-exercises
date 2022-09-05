type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

class Triplet {
  constructor(private a: number, private b: number, private c: number) {}
  toArray(): [number, number, number] { return [this.a, this.b, this.c]; }
}

export function triplets({minFactor, maxFactor, sum: n}: Options): Triplet[] {
  const results: Triplet[] = [];
  /*
   * a^2 + b^2 = c^2 and a + b + c = n
   * a, b, c when a, b, c are integers, they will never be the same to each other
   * ( otherwise  2*a^2 = c^2  ==>  sqrt(2)*a = c where a and c will at least one is not integer )
   * ( otherwise2  a^2 + b^2 = b^2  ==>  a^2 = 0 which is not a triangle any more )
   * so we can assume a < b < c
   * 
   * range of c:
   * since a, b, c not the same, are integers, and a < b < c,
   * the biggest a will be n/3-1 (because it the smallest in a, b, c, if bigger will never find b,c to fit)
   * the biggest b will be n/2-1 (pretty much same as previous explained, if a=1, then b can not bigger, otherwise will nerver find c to fit)
   * at this point, we can assume a,b,c will never greater than n/3, otherwise the other two number will never find
   * 
   * find the possibe c:
   * a^2 + b^2 = c^2 (as defined) --- "line 1"
   * ==> a^2 + b^2 + 2ab = c^2 + 2ab (both add 2ab)
   * ==> (a + b)^2 = c^2 + 2ab (left hand side did the inverse square spreading)
   * ==> (a + b)^2 - c^2 = 2ab (move c^2 to left)
   * ==> (n - c)^2 - c^2 = 2ab (replate a+b with n-c where a+b+c=n => a+b=n-c) --- "line 2"
   * ==> c^2 - (n - c)^2 + c^2 = a^2 + b^2 - 2ab (line 1 minus line 2)
   * ==> c^2 - n^2 + 2nc = (a - b)^2 (left hand side did the spreading, right hand side did the inverse square spreading)
   * now we can use it, (a - b) will be an integer, so that we can loop c to find
   * if sqrt(c^2 - n^2 + 2nc) is an integer, the c will be one of answer
   * 
   * got c than find a and b:
   * a + b + c = n (as defined) --- "line 3"
   * we found the (a - b), and here named it as "sqrt(A-B)fromC" <-this is a number, as we calculated the sqrt(c^2 - n^2 + 2nc)
   * ==> (a - b) = "sqrt(A-B)fromC" --- "line 4"
   * ==> 2b + c = n - "sqrt(A-B)fromC" (line 3 minus line 4)
   * ==> 2b = n - c - "sqrt(A-B)fromC" (move c from left to right)
   * ==> b = (n - c - "sqrt(A-B)fromC" ) /2  <---- HERE IS B
   * 
   * ==> 2a + c = n + "sqrt(A-B)fromC" (line 3 puls line 4)
   * ==> 2a = n - c - "sqrt(A-B)fromC" (move c from left to right)
   * ==> a = (n - c - "sqrt(A-B)fromC") / 2  <---- HERE IS A
   * or a = n - c - b  <---- HERE ALSO A
   * 
   */ 

  // as explained in "range of c:"
  for (let c=n-1; c>Math.floor(n / 3); c--) {

    // as explained in "find the possibe c:"
    const sqrtA_BfromC = Math.sqrt(c ** 2 - n ** 2 + 2 * c * n);

    //   |check NaN      |check integer      |check exist limit
    if (!sqrtA_BfromC || sqrtA_BfromC % 1 || (maxFactor && c > maxFactor)) continue;

    // as explained in "got c than find a and b:"
    const a = ( n - c - sqrtA_BfromC) / 2;

    //  |check is positive (it could be negative if c is too large)
    //  |        |check integer
    //  |        |         |check exist limit
    if (a < 1 || a % 1 || (minFactor && a < minFactor)) continue;

    // both works
    // const b = ( n - c + sqrtA_BfromC) / 2;
    const b = n - c - a;

    results.push(new Triplet(a, b, c))
  }
  return results;
}