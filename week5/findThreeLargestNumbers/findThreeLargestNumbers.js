const findThreeLargestNumbers = (array) => {

  const sortedArray = [];
  let mapOfIndexes = {};

  while (sortedArray.length < 3) {
    let currLargestNumber;
    let currLargestIndex;

    for (let i = 0; i < array.length; i++) {
    
      if (!mapOfIndexes[i] && (array[i] >= currLargestNumber || !currLargestNumber)) {
        currLargestNumber = array[i];
        currLargestIndex = i;
      }
    
      if (i === array.length - 1) {
        addNumberToOutputArray(currLargestNumber, sortedArray);
        mapOfIndexes[currLargestIndex] = true;
      }
    };
  };

  return sortedArray;
}

const addNumberToOutputArray = (number, array) => {
  if (!array.length || number >= array[array.length-1]) array.push(number)
  else array.unshift(number)
}

{
  const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

  const res = findThreeLargestNumbers(array);

  console.log(res)
}

{
  const array = [7,7,7];

  const res = findThreeLargestNumbers(array);

  console.log(res)
}

{
  const array = [141, 541, 541];

  const res = findThreeLargestNumbers(array);

  console.log(res)
}

{
  const array = [0, 1, 2];

  const res = findThreeLargestNumbers(array);

  console.log(res)
}

{
  const array = [8, 7, 1];

  const res = findThreeLargestNumbers(array);

  console.log(res)
}

{
  const array = [8, 1, 7];

  const res = findThreeLargestNumbers(array);

  console.log(res)
}

{
  const array = [7, 1, 8];

  const res = findThreeLargestNumbers(array);

  console.log(res)
}