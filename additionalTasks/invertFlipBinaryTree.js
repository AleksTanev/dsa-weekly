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
 * @return {TreeNode}
 */
 var invertTree = function(root) {

  if (!root || (!root.right && !root.left)) return root;

  const temp = root.left || null;
  root.left = root.right || null;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

{
  const tree = { value: 3, right: { value: 20, right: {value: 80}}, left: { value: 11}};
  const res = invertTree(tree);
  console.log(res);
};

{
  const tree = { value: 3, left: { value: 11}};
  const res = invertTree(tree);
  console.log(res);
};

{
  const tree = {};
  const res = invertTree(tree);
  console.log(res);
};