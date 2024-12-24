// Example 1:
//
// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:
//
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
//   Example 3:
//
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function(s) {
  let result = '';
  let currentWord = '';

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      currentWord = s[i] + currentWord;
    } else if (currentWord.length > 0) {
      result += (result.length > 0 ? ' ' : '') + currentWord;
      currentWord = '';
    }
  }

  if (currentWord.length > 0) {
    result += (result.length > 0 ? ' ' : '') + currentWord;
  }

  return result;
};

const s = 'a good   example';
console.log(reverseWords(s));