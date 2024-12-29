// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  let traversalCount = 0;
  let kNodeValue = 0;

  const inoderDfs = function (node) {
    if (!node) return;

    inoderDfs(node.left);
    traversalCount++;
    if (traversalCount === k) {
      kNodeValue = node.val;
    }
    inoderDfs(node.right);
  };

  inoderDfs(root);

  return kNodeValue;
};
