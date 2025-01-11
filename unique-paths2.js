// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;
  const dp = Array.from({ length: rows }, () => Array.from(cols).fill(0));

  dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;

  for (let row = 1; row < rows; row++) {
    dp[row][0] = obstacleGrid[row][0] === 0 ? dp[row - 1][0] : 0;
  }

  for (let col = 1; col < cols; col++) {
    dp[0][col] = obstacleGrid[0][col] === 0 ? dp[0][col - 1] : 0;
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (obstacleGrid[row][col] === 0) {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
      } else {
        dp[row][col] = 0;
      }
    }
  }

  return dp[rows - 1][cols - 1];
};
