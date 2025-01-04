// Input: grid = [[0,1],[1,0]]
// Output: [[0,1],[1,0],[1,1],[1,1],[1,0]]
// Explanation: The explanation of this example is shown below:
// Notice that 0 represents False and 1 represents True in the photo representing the Quad-Tree.
// Input: grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
// Output: [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
// Explanation: All values in the grid are not the same. We divide the grid into four sub-grids.
// The topLeft, bottomLeft and bottomRight each has the same value.
// The topRight have different values so we divide it into 4 sub-grids where each has the same value.
// Explanation is shown in the photo below:
/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
const construct = function (grid) {
  const n = grid.length;

  const isUniform = function (x1, y1, x2, y2) {
    const val = grid[x1][y1];

    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (grid[i][j] !== val) return false;
      }
    }

    return true;
  };

  const build = function (x1, y1, x2, y2) {
    if (isUniform(x1, y1, x2, y2)) {
      return new Node(grid[x1][y1] === 1, true, null, null, null, null);
    }

    const midX = Math.floor((x1 + x2) / 2);
    const midY = Math.floor((y1 + y2) / 2);

    const topLeft = build(x1, y1, midX, midY);
    const topRight = build(x1, midY + 1, midX, y2);
    const bottomLeft = build(midX + 1, y1, x2, midY);
    const bottomRight = build(midX + 1, midY + 1, x2, y2);

    if (
      topLeft.isLeaf &&
      topRight.isLeaf &&
      bottomLeft.isLeaf &&
      bottomRight.isLeaf &&
      topLeft.val === topRight.val &&
      topRight.val === bottomLeft.val &&
      bottomLeft.val === bottomRight.val
    ) {
      return new Node(topLeft.val, true, null, null, null, null);
    }

    return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
  };

  return build(0, 0, n - 1, n - 1);
};
