// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  const backTrack = function (row, col, index) {
    if (index === word.length) return true;
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const temp = board[row][col];
    board[row][col] = '#';

    const result =
      backTrack(row + 1, col, index + 1) ||
      backTrack(row - 1, col, index + 1) ||
      backTrack(row, col + 1, index + 1) ||
      backTrack(row, col - 1, index + 1);

    board[row][col] = temp;
    return result;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (backTrack(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};
