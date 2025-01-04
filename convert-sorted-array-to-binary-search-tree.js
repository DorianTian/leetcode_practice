// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted
// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  const buildBST = function (left, right) {
    if (left > right) return null;

    const mid = Math.floor((right + left) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = buildBST(left, mid - 1);
    node.right = buildBST(mid + 1, right);

    return node;
  };

  return buildBST(0, nums.length - 1);
};
