// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
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
const maxPathSum = function (root) {
  let sum = -Infinity;

  const dfs = function (node) {
    if (!node) return 0;

    let leftSum = Math.max(dfs(node.left), 0);
    let rightSum = Math.max(dfs(node.right), 0);

    let currentNodeSum = node.val + leftSum + rightSum;
    sum = Math.max(currentNodeSum, sum);

    return node.val + Math.max(leftSum, rightSum);
  };

  dfs(root);

  return sum;
};
