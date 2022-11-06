/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    
  if ((!p && !q) || (p?.value === undefined && q?.value === undefined)) return true;

  if (!p || !q || p.value !== q.value) return false;

  const isSameRight = isSameTree(p.right, q.right);
  const isSameLeft = isSameTree(p.left, q.left);

  return isSameRight && isSameLeft;
};

{
  const tree1 = { value: 3, left: { value: 10}, right: { value: 20}};
  const tree2 = { value: 3, left: { value: 9}, right: { value: 20}};
  const res = isSameTree(tree1,tree2);
  console.log(res);
};

{
  const tree1 = { value: 3, left: { value: 9}, right: { value: 20}};
  const tree2 = { value: 3, left: { value: 9}, right: { value: 20}};
  const res = isSameTree(tree1,tree2);
  console.log(res);
};

{
  const tree1 = { value: 3};
  const tree2 = { value: 3};
  const res = isSameTree(tree1,tree2);
  console.log(res);
};

{
  const tree1 = {};
  const tree2 = {};
  const res = isSameTree(tree1,tree2);
  console.log(res);
};

{
  const tree1 = { value: 42};
  const tree2 = {};
  const res = isSameTree(tree1,tree2);
  console.log(res);
};

{
  const tree1 = { value: 3, left: { value: 9}};
  const tree2 = { value: 3, right: { value: 9}};
  const res = isSameTree(tree1,tree2);
  console.log(res);
};