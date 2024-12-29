// Input: root = [4,2,6,1,3]
// Output: 1
// Input: root = [1,0,48,null,null,12,49]
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
const getMinimumDifference = function (root) {
  if (!root) return 0;
  let minimumDifference = Infinity;
  let prev = null;

  const inorder = function (node) {
    if (!node) return;

    inorder(node.left);

    if (prev !== null) {
      minimumDifference = Math.min(minimumDifference, node.val - prev);
    }

    prev = node.val;

    inorder(node.right);
  };

  inorder(root);

  return minimumDifference;
};
