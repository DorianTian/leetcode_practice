/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const cols = matrix[0].length;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < cols; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < cols / 2; j++) {
      [matrix[i][j], matrix[i][cols - j - 1]] = [matrix[i][cols - j - 1], matrix[i][j]];
    }
  }

  return matrix;
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotate(matrix))
