// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const dp = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => 0)
  );
  const rows = grid.length;
  const cols = grid[0].length;

  dp[0][0] = grid[0][0];

  for (let col = 1; col < cols; col++) {
    dp[0][col] = dp[0][col - 1] + grid[0][col];
  }
  for (let row = 1; row < rows; row++) {
    dp[row][0] = dp[row - 1][0] + grid[row][0];
  }
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      dp[row][col] =
        grid[row][col] + Math.min(dp[row - 1][col], dp[row][col - 1]);
    }
  }
  console.log('dp: ', dp);
  return dp[rows - 1][cols - 1];
};

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(minPathSum(grid));
