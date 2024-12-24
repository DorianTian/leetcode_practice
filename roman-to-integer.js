// Example 1:
//
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:
//
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
//
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
  if (s.length === 0) return 0;
  let n = s.length;
  const symbolsToValueMap = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
  };

  let counts = 0;

  for (let i = 0; i < n; i++) {
    if (symbolsToValueMap[s[i]] < symbolsToValueMap[s[i + 1]]) {
      counts -= symbolsToValueMap[s[i]];
    } else {
      counts += symbolsToValueMap[s[i]];
    }
  }

  return counts;
};

const s = 'MCMXCIV';
// const s = 'MC';
console.log(romanToInt(s));