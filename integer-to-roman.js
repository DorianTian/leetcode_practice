// Example 1:
//
// Input: num = 3749
//
// Output: "MMMDCCXLIX"
//
// Explanation:
//
//   3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
// 700 = DCC as 500 (D) + 100 (C) + 100 (C)
// 40 = XL as 10 (X) less of 50 (L)
// 9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
// Example 2:
//
// Input: num = 58
//
// Output: "LVIII"
//
// Explanation:
//
//   50 = L
// 8 = VIII
// Example 3:
//
// Input: num = 1994
//
// Output: "MCMXCIV"
//
// Explanation:
//
//   1000 = M
// 900 = CM
// 90 = XC
// 4 = IV
/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function(num) {
  const romanMap = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];

  let result = '';

  for (const { value, symbol } of romanMap) {
    const count = Math.floor(num / value);
    result += symbol.repeat(count);
    num %= value;
  }

  return result;
};

const num = 3749;
console.log(intToRoman(num));