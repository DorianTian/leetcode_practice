// Input: root = [2,1,3]
// Output: true
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
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
 * @return {boolean}
 */
const isValidBST = function (root) {
  if (!root) return;

  let prev = null;

  const inorderDfs = function (node) {
    if (!node) return true;

    const leftIsBST = inorderDfs(node.left);
    if (prev && prev.val >= node.val) {
      return false;
    }
    prev = node;
    const rightIsBST = inorderDfs(node.right);

    return leftIsBST && rightIsBST;
  };

  const isBST = inorderDfs(root);

  return isBST;
};
