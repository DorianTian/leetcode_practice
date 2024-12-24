// Example 1:
//
// Input: s = "()"
//
// Output: true
//
// Example 2:
//
// Input: s = "()[]{}"
//
// Output: true
//
// Example 3:
//
// Input: s = "(]"
//
// Output: false
//
// Example 4:
//
// Input: s = "([])"
//
// Output: true
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = [];
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const character of s) {
    console.log(character);
    if (character === '(' || character === '[' || character === '{') {
      stack.push(character);
    } else {
      console.log(stack);
      if (stack[stack.length - 1] === bracketMap[character]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length === 0) return true;

  return false;
};

const s = '(]';
console.log(isValid(s));