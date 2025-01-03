// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
// Input: n = 1
// Output: ["()"]
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const result = [];

  const backTrack = function (current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backTrack(current + '(', open + 1, close);
    }

    if (close < open) {
      backTrack(current + ')', open, close + 1);
    }
  };

  backTrack('', 0, 0);

  return result;
};
