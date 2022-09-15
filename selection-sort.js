const selectionSort = (array) => { 

  for (let i = 0; i < array.length-1; i++) {

    let minIndex = i;

    for (let j = i+1; j < array.length; j++) {

      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
  }

  return array;
}

{
  const arr = [8, 5, 2, 9, 5, 6, 3];
  
  console.log(selectionSort(arr));
}
{
  const arr = [8, 5];
  
  console.log(selectionSort(arr));
}
{
  const arr = [8];
  
  console.log(selectionSort(arr));
}