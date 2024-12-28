// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  const inOrderMap = new Map();
  inorder.forEach((inItem, idx) => inOrderMap.set(inItem, idx));

  const build = function (preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;

    let rootVal = preorder[preStart];
    let root = new TreeNode(rootVal);
    let rootIdx = inOrderMap.get(rootVal);
    let leftSize = rootIdx - inStart;

    root.left = build(preStart + 1, preStart + leftSize, inStart, rootIdx - 1);
    root.right = build(preStart + leftSize + 1, preEnd, rootIdx + 1, inEnd);

    return root;
  };

  return build(0, preorder.length - 1, 0, inorder.length - 1);
};
