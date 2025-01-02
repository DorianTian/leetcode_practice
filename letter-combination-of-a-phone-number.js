// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const keyMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const result = [];

  const backTrack = function (index, combinations) {
    if (index === digits.length) {
      result.push(combinations);
      return;
    }

    let letters = keyMap[digits[index]];

    for (let letter of letters) {
      backTrack(index + 1, combinations + letter);
    }
  };

  backTrack(0, '');
  return result;
};
