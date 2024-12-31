// Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
// Output: 4
// Explanation:
// In the beginning, you start at square 1 (at row 5, column 0).
// You decide to move to square 2 and must take the ladder to square 15.
// You then decide to move to square 17 and must take the snake to square 13.
// You then decide to move to square 14 and must take the ladder to square 35.
// You then decide to move to square 36, ending the game.
// This is the lowest possible number of moves to reach the last square, so return 4.
// Example 2:

// Input: board = [[-1,-1],[-1,3]]
// Output: 1
/**
 * @param {number[][]} board
 * @return {number}
 */
const snakesAndLadders = function (board) {
  const n = board.length;
  const getBoardValue = function (pos) {
    const row = Math.floor((pos - 1) / n);
    const column = (pos - 1) % n;
    const actualRow = n - 1 - row;
    const actualColumn = row % 2 === 0 ? column : n - 1 - column;

    return board[actualRow][actualColumn];
  };

  const queue = [[1, 0]];
  const visited = new Set();
  visited.add(1);

  while (queue.length) {
    const [current, steps] = queue.shift();

    for (let i = 1; i <= 6; i++) {
      let next = current + i;
      if (next > n * n) break;

      const boardValue = getBoardValue(next);
      if (boardValue !== -1) {
        next = boardValue;
      }

      if (next === n * n) return steps + 1;

      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  return -1;
};
