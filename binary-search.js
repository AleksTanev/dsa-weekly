// const binarySearch = (array, target) => {

//   if (array.length === 1) {
    
//     return (array[0] === target) ? 0 : -1;
//   } 
  
//   const midIndex = Math.ceil((array.length - 1) / 2);
      // if (target === array[midIndex]) return 0;
//   let result;

//   if (target > array[midIndex]) {
//     const rightSideRes = binarySearch(array.slice(midIndex), target);
//     result = (rightSideRes !== -1) ? (midIndex + rightSideRes) : -1;
//   } else {
//     result = binarySearch(array.slice(0, midIndex), target);
//   }

//   return result;
// }

// {
//   const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
//   const target = 770
//   console.log(binarySearch(array, target))
// }
// {
//   const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
//   const target = 0
//   console.log(binarySearch(array, target))
// }
// {
//   const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
//   const target = 45
//   console.log(binarySearch(array, target))
// }
// {
//   const array = [-7, -3, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
//   const target = -7
//   console.log(binarySearch(array, target))
// }

function binarySearchIterative(array, target) {

  let [pointerA, pointerB] = [0, array.length-1];

  while (pointerA <= pointerB) {

    if (pointerA === pointerB) {
      
      return (array[pointerA] === target) ? pointerA : -1;
    }
    
    const midIndex = Math.ceil((pointerA + pointerB) / 2);

    if (target === array[midIndex]) return midIndex;

    if (target > array[midIndex]) {
      pointerA = midIndex;
    } else {
      pointerB = midIndex-1;
    }
  }
}

{
  const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
  const target = 770
  console.log(binarySearchIterative(array, target))
}
{
  const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
  const target = 0
  console.log(binarySearchIterative(array, target))
}
{
  const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
  const target = 45
  console.log(binarySearchIterative(array, target))
}
{
  const array = [-7, -3, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
  const target = -3
  console.log(binarySearchIterative(array, target))
}