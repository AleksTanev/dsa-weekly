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
 var maxPathSum = function(root) {
    
  if (!root || root.value === undefined) return 0;


  let isConnected;



  const maxSumRight = maxPathSum(root.right);
  const maxSumLeft = maxPathSum(root.left);

  // if (maxSumRight < 0 && maxSumLeft >= 0) return root.value + maxSumLeft;
  // if (maxSumRight >= 0 && maxSumLeft < 0) return root.value + maxSumRight;
  // if (maxSumRight >= 0 && maxSumLeft >= 0) return root.value + maxSumLeft + maxSumRight;
  // if (maxSumRight < 0 && maxSumLeft < 0) return root.value;

};


{
  const tree = { value: 3, left: { value: 9}, right: { value: 20}};
  const res = maxPathSum(tree);
  console.log(res);
};

{
  const tree = { value: 3, left: { value: 9}, right: { value: -20}};
  const res = maxPathSum(tree);
  console.log(res);
};

{
  const tree = { value: 3, left: { value: -9}, right: { value: -20}};
  const res = maxPathSum(tree);
  console.log(res);
};

{
  const tree = { value: 3, left: { value: 9, left: { value: 2}, right: {value: 1}}, right: { value: 20}};
  const res = maxPathSum(tree);
  console.log(res);
};