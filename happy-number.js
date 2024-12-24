// Example 1:
//
// Input: n = 19
// Output: true
// Explanation:
//   12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:
//
// Input: n = 2
// Output: false
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const map = {};

  const getNum = (number) => {
    let sum = 0;

    while (number > 0) {
      let digit = number % 10;
      sum += digit * digit;
      number = Math.floor(number / 10);
    }

    return sum;
  };

  while (n !== 1) {
    if (map[n]) {
      return false;
    }

    map[n] = n;
    n = getNum(n);
  }

  return true;
};

const n = 19;
console.log(isHappy(n));
