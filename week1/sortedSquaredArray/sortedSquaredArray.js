function sortArraySquared (array) {

  return array
    .reduce((stackAndSorted, val) => {
      const stack = stackAndSorted.stack;
      const sortedArr = stackAndSorted.sortedArr;

      if (val < 0) {
        stack.push(Math.abs(val));
      } else if (val > stack[stack.length -1]) {
        const valueToInsert = stack.pop();
        sortedArr.push(Math.pow(valueToInsert,2));
        sortedArr.push(Math.pow(val, 2));
      } else {
        sortedArr.push(Math.pow(val,2));
      }

      return stackAndSorted;
    }, { stack: [], sortedArr: []})
    .sortedArr;
};

//// TESTS
{
  const array = [1, 2, 3, 5, 6, 8, 9]; 
  console.log(sortArraySquared(array));
}

{
  const array2 = [-3,-1, 0, 2,5]; 
  console.log(sortArraySquared(array2));
}