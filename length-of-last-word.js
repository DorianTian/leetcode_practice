// Example 1:
//
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:
//
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:
//
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
  let resultLength = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === ' ') {
    i--;
  }

  while (i >= 0 && s[i] !== ' ') {
    resultLength++;
    i--;
  }

  return resultLength;
};

// const s = 'luffy is still joyboy';
const s = '   fly me   to   the moon  ';
// const s = 'a';
console.log(lengthOfLastWord(s));