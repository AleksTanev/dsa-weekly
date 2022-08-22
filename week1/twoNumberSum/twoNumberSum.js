function findSumTwoNumbers (array, targetSum) {

  return array.reduce((mapAndDoublet, number) => {
    const difference = targetSum - number;
    const mapNumbers = mapAndDoublet.mapNumbers;

    if (mapNumbers[difference]) mapAndDoublet.doublet = [difference, number];
    mapNumbers[number] = number;

    return mapAndDoublet;
  }, { doublet: [], mapNumbers: {} })
  .doublet;
};

/// TESTS

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

console.log(findSumTwoNumbers(array, target));

  // const mapNumbers = [];
  // let i = 0;

//   while (i < array.length) {
//     const difference = targetSum - array[i];

//     if (mapNumbers[difference]) return [difference, array[i]];
    
//     mapNumbers[array[i]] = array[i];
//     i++;
//   }

//   return [];
// }