function findSumTwoNumbers (array, targetSum) {

  const mapNumbers = [];
  let index = 0;
  
  while (index++ < array.length) {
    const difference = targetSum - array[index];

    if (mapNumbers[difference]) return [difference, array[index]];
    
    mapNumbers[array[index]] = array[index];
  };

  return [];
}
/// TESTS
{
  const array = [3, 5, -4, 8, 11, 1, -1, 6];
  const target = 10; 
  console.log(findSumTwoNumbers(array, target));
}