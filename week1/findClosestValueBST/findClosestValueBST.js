
function findClosestValueInBST(root, target) {
  let currentNode = root;
  let closestValue = root.value;

  while (currentNode) {

    const currentValue = currentNode.value

    if (currentValue - target < closestValue - target) closestValue = currentValue;

    if (closestValue - target === 1) break;

    currentNode = (target < currentValue) ? currentNode.left : currentNode.right;
  }

  return closestValue;
}

///// TESTS

const root1 = null
const root2 = { value: 1 }
const root3 = {
	value: 10,
	left: {value: 5, right: { value: 9, right: null, left: null}, left: {value: 3, right: null, left: null}},
	right: {value: 15, right: null, left: null}
};

console.log(findClosestValueInBST(root3, 12))


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