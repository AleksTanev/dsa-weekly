const bubbleSort = (array) => {

  let index = 0;
  let sorted = true;
  let passes = 1;

  while (index + 1 < array.length) {

    if (array[index] > array[index+1]) {

      [array[index], array[index+1]] = [array[index+1], array[index]];
      sorted = false;
    }

    if (index+1 === array.length -1) {

      if (sorted) return passes;

      sorted = true;
      index = 0;
      passes++;

    } else {

      index++;
    }
  }
};

const bubbleSort2 = (array) => {

  const sortedArray = [...array];

  for (let i = 0; i < sortedArray.length - 1; i++) {

    for (let j = 0; j < sortedArray.length - i - 1; j++) {

      if (sortedArray[j] > sortedArray[j+1]) {
        [sortedArray[j], sortedArray[j+1]] = [sortedArray[j+1], sortedArray[j]];
      }
    }
  }

  return sortedArray;
}

// const isItSorted = (array) => {
//   let sorted = true;
//   let i = 0;
//   while (i < array.length) {
//     if (array[i] > array[i+1]) {
//       sorted = false;
//     }
//     i++;
//   }
//   return sorted;
// }

{
  const arr = [5, 1, 4, 2, 8]
  console.log(bubbleSort(arr))
}
{
  const arr = [5, 1, 4, 2, 8]
  console.log(bubbleSort2(arr))
}