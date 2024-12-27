// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Input: root = [1,null,2]
// Output: 2
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
const maxDepth = function(root) {
  if (root === null) return 0;
  const queue = [root];
  let levels = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;
    levels++;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return levels;
};