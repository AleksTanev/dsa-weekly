const validateBST = (root) => {

  if (!root.left && !root.right) {
    
    return true;
  }

  if (root.left?.value > root.value || root.right?.value <= root.value) {

    return false;
  }

  let resRight = true;
  let resLeft = true;

  if (root.right) {
    resRight = validateBST(root.right);
  }

  if (root.left) {
    resLeft = validateBST(root.left);
  }

  return (!resLeft || !resRight) ? false : true;

} 

{
  const root = {
    value: 10,
    left: {value: 5, right: { value: 9, right: null, left: null}, left: {value: 3, right: null, left: null}},
    right: {value: 15, right: null, left: null}
  };
  console.log(validateBST(root))
}
{
  const root = {
    value: 10,
    left: {value: 5, right: { value: 9, right: null, left: null}, left: {value: 3, right: null, left: null}},
    right: {value: 15, right: 14, left: null}
  };
  console.log(validateBST(root))
}
{
  const root = {
    value: 10,
    left: {value: 5, right: { value: 9, right: null, left: null}, left: {value: 3, right: null, left: null}},
    right: {value: 15, right: null, left: null}
  };
  console.log(validateBST(root))
}