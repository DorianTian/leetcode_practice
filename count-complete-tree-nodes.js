// Input: root = [1,2,3,4,5,6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function (root) {
  if (!root) return 0;

  const getHeight = function (node) {
    let height = 0;
    while (node) {
      height++;
      node = node.left;
    }

    return height;
  };

  let leftNodeHeight = getHeight(root.left);
  let rightNodeHeight = getHeight(root.right);

  if (leftNodeHeight === rightNodeHeight) {
    return (1 << leftNodeHeight) + countNodes(root.right);
  } else {
    return (1 << rightNodeHeight) + countNodes(root.left);
  }
};
