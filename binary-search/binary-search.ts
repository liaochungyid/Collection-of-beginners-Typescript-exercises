export function find(haystack: number[], needle: number): number {
  // const result = haystack.indexOf(needle);
  // if (result === -1 ) throw new Error('Value not in array');
  // return result;

  let start = 0;
  let end = haystack.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const target = haystack[mid];
    if (target > needle) {
      end = mid - 1;
    } else if (target < needle) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  throw new Error('Value not in array'); 
}
