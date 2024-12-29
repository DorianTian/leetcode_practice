// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rowCount = grid.length;
  const columnCount = grid[0].length;
  let isLandCount = 0;

  const dfs = function (i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= rowCount ||
      j >= columnCount ||
      grid[i][j] === '0'
    )
      return;

    grid[i][j] = '0';

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j);
        isLandCount++;
      }
    }
  }

  return isLandCount;
};
