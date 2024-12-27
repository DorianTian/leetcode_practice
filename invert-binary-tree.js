// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:
//
// Input: root = []
// Output: []
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
 * @return {TreeNode}
 */
const invertTree = function(root) {
  if (root === null) return null;

  let transientNode = root.left;
  root.left = root.right;
  root.right = transientNode;

  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);

  return root;
};