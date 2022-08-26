
function findClosestValueInBST(root, target) {
  let currentNode = root;
  let closestValue = root.value;

  while (currentNode) {

    const currentValue = currentNode.value

    if (Math.abs(currentValue - target) < Math.abs(closestValue - target)) closestValue = currentValue;

    if (Math.abs(closestValue - target) === 1) break;

    currentNode = (target < currentValue) ? currentNode.left : currentNode.right;
  }

  return closestValue;
}

///// TESTS

{
  const root = {}
  const target = 12
  console.log(findClosestValueInBST(root, target))
}

{
  const root = { value: 1 }
  const target = 0
  console.log(findClosestValueInBST(root, target))
}

{
  const root = {
    value: 10,
    left: {value: 5, right: { value: 9, right: null, left: null}, left: {value: 3, right: null, left: null}},
    right: {value: 15, right: null, left: null}
  };
  const target = 12
  console.log(findClosestValueInBST(root, target))
}

{
  const root = { value: -5, left: { value: -8 }, right: {value: -1} }
  const target = -2
  console.log(findClosestValueInBST(root, target))
}


// while (currentNode) {
  // const diffLeftValue = currentNode.left.value - target;
  // const diffRightValue = currentNode.right.value - target;
  // const currDiff = closestValue - target

  // if ((diffLeftValue > currDiff ) && (diffRightValue > currDiff)) {
  //   break;
  // }

  // if (Math.abs(leftValue - target) < Math.abs(rightValue - target)) {
  //   closestValue = currentNode.left.value
  //   currentNode = currentNode.left
  // } else if (Math.abs(leftValue - target) > Math.abs(rightValue - target)) {
  //   closestValue = currentNode.right.value
  //   currentNode = currentNode.right
  // }
// }