// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Input: root = [1,2,2,null,3,null,3]
// Output: false
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// const isSymmetric = function(root) {
//   if (root === null) return false;
//   const isCurrentNodeSymmetric = function(left, right) {
//     if (left === null && right === null) return true;
//     if (!left || !right) return false;
//     if (left.val !== right.val) return false;

//     return isCurrentNodeSymmetric(left.left, right.right) && isCurrentNodeSymmetric(left.right, right.left);
//   };

//   return isCurrentNodeSymmetric(root.left, root.right);
// };
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  if (root === null) return false;

  const queue = [root.left, root.right];
  while (queue.length) {
    let left = queue.shift();
    let right = queue.shift();

    if (left === null && right === null) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }

  return true;
};
