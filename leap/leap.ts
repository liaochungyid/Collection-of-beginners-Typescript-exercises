export function isLeap(year: number): boolean {
  // if (year % 4 === 0) {
  //   if (year % 100 === 0 ) {
  //     if (year % 400 === 0) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   } else {
  //     return true
  //   }
  // } else {
  //   return false
  // }

  // if (year % 400 === 0) {
  //   return true
  // } else {
  //   if (year % 4 === 0) {
  //     if (year % 100 === 0) {
  //       return false
  //     } else {
  //       return true
  //     }
  //   } else {
  //     return false
  //   }
  // }

  // if (year % 400 === 0) {
  //   return true
  // } 
  // if (year % 4 === 0 && year % 100 !== 0) {
  //   return true
  // } 
  // return false

  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
