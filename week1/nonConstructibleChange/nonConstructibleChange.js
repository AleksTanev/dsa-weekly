function findMinimumNonConstructibleChange(arrayOfCoins) {

  const sortedArr = arrayOfCoins.sort((a,b) => a-b);

  let index = 0;
  if (sortedArr[index] !== 1) {
    return 1;
  }

  let sum = 0;
  while (index < sortedArr.length) {
    if (sortedArr[index] > sum + 1) {
      return sum + 1;
    }
    sum += sortedArr[index]
    index++;
  }

  return sum + 1;
}

//// TESTS
{
  const coins = [5, 7, 1, 1, 2, 3, 22];
  const expected = 20
  console.log(findMinimumNonConstructibleChange(coins));
};

{
  const coins = [1, 1, 4, 22];
  const expected = 3
  console.log(findMinimumNonConstructibleChange(coins));
};

{
  const coins = [1, 4];
  const expected = 2
  console.log(findMinimumNonConstructibleChange(coins));
};

{
  const coins = [];
  const expected = 1
  console.log(findMinimumNonConstructibleChange(coins));
};

{
  const coins = [1,2,3,4];
  const expected = 11
  console.log(findMinimumNonConstructibleChange(coins));
};