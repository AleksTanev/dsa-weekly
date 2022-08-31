const binarySearch = (array, target) => {

  if (array.length === 1) {
    
    return (array[0] === target) ? 0 : -1;
  } 
  
  const midIndex = Math.ceil((array.length - 1) / 2);
  let result;

  if (target >= array[midIndex]) {
    const rightSideRes = binarySearch(array.slice(midIndex), target);
    result = (rightSideRes !== -1) ? (midIndex + rightSideRes) : -1;
  } else {
    result = binarySearch(array.slice(0, midIndex), target);
  }

  return result;
}

{
  const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
  const target = 770
  console.log(binarySearch(array, target))
}
{
  const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
  const target = 0
  console.log(binarySearch(array, target))
}
{
  const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
  const target = 45
  console.log(binarySearch(array, target))
}
{
  const array = [-7, -3, 1, 21, 33, 45, 45, 61, 71, 72, 73, 770]
  const target = -7
  console.log(binarySearch(array, target))
}