const validateBST = (root) => {
  if (!root.value || (!root.left && !root.right)) {
    return true;
  }

  if (root.left?.value > root.value || root.right?.value <= root.value) {
    return false;
  }

  const isValidRight = validateBST(root.right);

  const isValidLeft = validateBST(root.left);

  return (isValidLeft && isValidRight) ? true : false;
};

{
  const root = {
    value: 10,
    left: {value: 5, right: {value: 9, right: null, left: null}, left: {value: 3, right: null, left: null}},
    right: {value: 15, right: null, left: null},
  };
  console.log(validateBST(root));
}
{
  const root = {
    value: 10,
    left: {value: 5, right: {value: 9, right: null, left: null}, left: {value: 3, right: null, left: null}},
    right: {value: 15, right: {value: 14}, left: null},
  };
  console.log(validateBST(root));
}
// {
//   const root = {
//     value: 10,
//     left: {value: 5, right: { value: 9, right: null, left: null}, left: {value: 3, right: null, left: null}},
//     right: {value: 15, right: null, left: null}
//   };
//   console.log(validateBST(root))
// }
