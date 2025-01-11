// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4
// Input: matrix = [["0","1"],["1","0"]]
// Output: 1
// Example 3:

// Input: matrix = [["0"]]
// Output: 0
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const dp = Array.from({ length: m }, () => Array.from({ length: n }).fill(0));
  let maxSide = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }

  return maxSide * maxSide;
};

// const matrix = [
//   ['1', '0', '1', '0', '0'],
//   ['1', '0', '1', '1', '1'],
//   ['1', '1', '1', '1', '1'],
//   ['1', '0', '0', '1', '0'],
// ];
const matrix = [
  ['0', '1'],
  ['1', '0'],
];
console.log(maximalSquare(matrix));
