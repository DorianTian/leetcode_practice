/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
  if (!board || board.length === 0) return;

  const rowCount = board.length;
  const columnCount = board[0].length;

  const dfs = function (i, j) {
    if (
      i < 0 ||
      i >= rowCount ||
      j < 0 ||
      j >= columnCount ||
      board[i][j] !== 'O'
    )
      return;

    board[i][j] = 'E';

    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < rowCount; i++) {
    if (board[i][0] === 'O') dfs(i, 0);
    if (board[i][columnCount - 1] === 'O') dfs(i, columnCount - 1);
  }

  for (let j = 0; j < columnCount; j++) {
    if (board[0][j] === 'O') dfs(0, j);
    if (board[rowCount - 1][j] === 'O') dfs(rowCount - 1, j);
  }

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === 'E') {
        board[i][j] = 'O';
      }
    }
  }
};
