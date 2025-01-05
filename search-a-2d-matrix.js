// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  for (const row of matrix) {
    if (row[row.length - 1] < target) continue;

    let left = 0;
    let right = row.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (row[mid] === target) return true;

      if (row[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return false;
};
