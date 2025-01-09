// Example 1:
//
// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:
//
// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:
//
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  // if (n === 0) return 1;
  // if (n < 0) return 1 / myPow(x, -n);
  //
  // const half = myPow(x, Math.floor(n / 2));
  //
  // if (n % 2 === 0) {
  //   return half * half;
  // } else {
  //   return half * half * x;
  // }
  if (n === 0) return 1;

  let absN = Math.abs(n);
  let result = 1;

  while (absN > 0) {
    if (absN % 2 === 1) {
      result *= x;
    }

    x *= x;
    absN = Math.floor(absN / 2);
  }

  return n > 0 ? result : 1 / result;
};
