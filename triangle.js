// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10
/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  const n = triangle.length;
  const dp = triangle[n - 1].slice();

  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      dp[col] = Math.min(dp[col], dp[col + 1]) + triangle[row][col];
    }
  }

  return dp[0];
};
