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
 var maxDepth = function(root) {
    if (!root || root.value === undefined) return 0;

    const leftDepth = 1 + maxDepth(root.left);
    const rightDepth = 1 + maxDepth(root.right);

    return Math.max(leftDepth, rightDepth);
};

{
  const tree = { value: 3, left: { value: 9}, right: { value: 20, left: { value: 15}, right: {value: 7}}};
  const res = maxDepth(tree);
  console.log(res);
};

{
  const tree = { value: 3, right: { value: 20}};
  const res = maxDepth(tree);
  console.log(res);
};

{
  const tree = { value: 3};
  const res = maxDepth(tree);
  console.log(res);
};

{
  const tree = {};
  const res = maxDepth(tree);
  console.log(res);
};