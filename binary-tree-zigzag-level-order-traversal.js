// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

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
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const zigzagLevelOrderList = [];
  let isReverse = true;

  while (queue.length) {
    let levelSize = queue.length;
    let levelNodes = [];
    isReverse = !isReverse;

    for (let i = 0; i < levelSize; i++) {
      const node = isReverse ? queue.pop() : queue.shift();
      levelNodes.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    zigzagLevelOrderList.push(levelNodes);
  }

  return zigzagLevelOrderList;
};
