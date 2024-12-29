// Input: root = [1,2,3,null,5,null,4]

// Output: [1,3,4]
// Input: root = [1,2,3,4,null,null,null,5]

// Output: [1,3,4,5]

// Example 3:

// Input: root = [1,null,3]

// Output: [1,3]

// Example 4:

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
 * @return {number[]}
 */
const rightSideView = function (root) {
  if (!root) return [];
  const queue = [root];
  const rightSideViewNodes = [];

  while (queue.length) {
    let levelSize = queue.length;
    let levelNode = null;

    for (let i = 0; i < levelSize; i++) {
      levelNode = queue.shift();
      if (levelNode.left) queue.push(levelNode.left);
      if (levelNode.right) queue.push(levelNode.right);
    }

    rightSideViewNodes.push(levelNode.val);
  }

  return rightSideViewNodes;
};
