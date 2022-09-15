const insertionSort = (array) => {

  for (let i = 0; i < array.length; i++) {

    for (let j = i; j >= 1; j--) {

      if (array[j] < array[j-1]) {

        [array[j], array[j-1]] = [array[j-1], array[j]];

      } else {
        
        break;
      }
    }
  }

  return array;
}

{
  const arr = [8, 5, 2, 9, 5, 6, 3]; 
  console.log(insertionSort(arr))
}
{
  const arr = [8, 5]; 
  console.log(insertionSort(arr))
}
{
  const arr = [8]; 
  console.log(insertionSort(arr))
}
{
  const arr = []; 
  console.log(insertionSort(arr))
}