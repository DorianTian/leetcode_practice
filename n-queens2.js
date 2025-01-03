// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
// Example 2:

// Input: n = 1
// Output: 1
/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function (n) {
  let count = 0;

  const columns = Array(n).fill(false);
  const mainDiagonal = Array(2 * n - 1).fill(false);
  const antiDiagonal = Array(2 * n - 1).fill(false);

  const backTrack = function (row) {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (
        columns[col] ||
        mainDiagonal[row - col + n - 1] ||
        antiDiagonal[row + col]
      ) {
        continue;
      }

      columns[col] = true;
      mainDiagonal[row - col + n - 1] = true;
      antiDiagonal[row + col] = true;

      backTrack(row + 1);

      columns[col] = false;
      mainDiagonal[row - col + n - 1] = false;
      antiDiagonal[row + col] = false;
    }
  };

  backTrack(0);
  return count;
};
