function findMinimumNonConstructibleChange(arrayOfCoins) {

  // const buildBSTFromArr = (arrayOfCoins, start = 0, end = arrayOfCoins.length - 1) => {

  //   if (start === end) {
  //     return;
  //   }



  // }

  if (arrayOfCoins.length < 1) {
    return [];
  }



  let index = 0;
  let root = newNode(arrayOfCoins[index++])

  while (index < arrayOfCoins.length) {
    const node = newNode(arrayOfCoins[index]);

    buildBST(root, node);
    index++;
  }

  return root;
}

const newNode = (value) => {

  return {
    value,
    left: null,
    right: null
  }
}

const buildBST = (root, newNode) => {

  if (!root.left && root.value && root.value > newNode.value) {
    root.left = newNode;
    return;
  }

  if (!root.right && root.value && root.value <= newNode.value) {
    root.right = newNode;
    return;
  }

  if (root.value > newNode.value) buildBST(root.left, newNode)
  if (root.value <= newNode.value) buildBST(root.right, newNode)

}

//// TESTS
const coins = [5, 7, 1, 1, 2, 3, 22];
console.log(findMinimumNonConstructibleChange(coins));