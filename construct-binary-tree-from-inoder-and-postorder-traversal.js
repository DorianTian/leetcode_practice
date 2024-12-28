// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: inorder = [-1], postorder = [-1]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {
  const inorderMap = new Map();
  inorder.forEach((inItem, idx) => inorderMap.set(inItem, idx));

  const build = function (inStart, inEnd, postStart, postEnd) {
    if (inStart > inEnd || postStart > postEnd) return null;

    let rootVal = postorder[postEnd];
    let root = new TreeNode(rootVal);
    let rootIdx = inorderMap.get(rootVal);
    let rightSize = inEnd - (rootIdx + 1);

    root.left = build(inStart, rootIdx - 1, postStart, postEnd - rightSize - 2);
    root.right = build(
      rootIdx + 1,
      inEnd,
      postEnd - 1 - rightSize,
      postEnd - 1
    );

    return root;
  };

  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
