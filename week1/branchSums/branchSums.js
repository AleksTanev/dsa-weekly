function getSumsOfBranches(root) {

  const helper = (root, sumsArr = [], currentSum = 0) => {
    if (!root.left && !root.right && root.value) {
      sumsArr.push(currentSum + root.value);

      return sumsArr;
    }

    if (root.left) {
      helper(root.left, sumsArr, currentSum + root.value);
    }

    if (root.right) {
      helper(root.right, sumsArr, currentSum + root.value);
    }

    return sumsArr;
  }

  return helper(root);
}

//// TESTS
console.log('Starting getSumOfBranches testing...');
{
  console.log("### Tests ###");
  const root = { value: 1, left: {value: 12, left: { value: 2 }, right: { value: 8} }, right: { value: 2, left: {value: 2}, right: { value: 4 } } }
  const result = getSumsOfBranches(root);
  const expected = [15,21,5,7];
  
  console.log(result.length === expected.length && result.every((value, index) => value === expected[index]) ? 'Pass' : 'Fail');
}
{
  const root = { value: 1 }
  const result = getSumsOfBranches(root);
  const expected = [1];
  
  console.log(result.length === expected.length && result.every((value, index) => value === expected[index]) ? 'Pass' : 'Fail');
}
{
  const root = { value: 1, left: {value: 12, left: { value: 2 }, right: { value: 8} }, right: { value: 2, left: {value: 2}, right: { value: 4 } } }
  const result = getSumsOfBranches(root);
  const expected = [15,21,5,7];
  
  console.log(result.length === expected.length && result.every((value, index) => value === expected[index]) ? 'Pass' : 'Fail');
}
{
  const root = { value: 1, left: {value: 12, left: { value: 2 }, right: { value: 8, right: { value: 1}} }, right: { value: 2, left: {value: 2}, right: { value: 4 } } }
  const result = getSumsOfBranches(root);
  const expected =[15, 22, 5, 7];

  console.log(result.length === expected.length && result.every((value, index) => value === expected[index]) ? 'Pass' : 'Fail');
}
{
  const root = {}
  const result = getSumsOfBranches(root);
  const expected =[];

  console.log(result.length === expected.length && result.every((value, index) => value === expected[index]) ? 'Pass' : 'Fail');
}