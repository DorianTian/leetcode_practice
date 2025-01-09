// Example 1:

// Input: left = 5, right = 7
// Output: 4
// Example 2:

// Input: left = 0, right = 0
// Output: 0
// Example 3:

// Input: left = 1, right = 2147483647
// Output: 0
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeBitwiseAnd = function (left, right) {
  let step = 0;
  while (left !== right) {
    left >>= 1;
    right >>= 1;
    step++;
  }

  left <<= step;

  return left;
};
