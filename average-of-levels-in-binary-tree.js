// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]
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
var averageOfLevels = function (root) {
  if (!root) return [];
  const queue = [root];
  const levelAverageList = [];

  while (queue.length) {
    let levelSize = queue.length;
    let levelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelSum += node.val;
      node.left ? queue.push(node.left) : 0;
      node.right ? queue.push(node.right) : 0;
    }

    levelAverageList.push(
      parseFloat(parseFloat(levelSum / levelSize).toFixed(5))
    );
  }

  return levelAverageList;
};
