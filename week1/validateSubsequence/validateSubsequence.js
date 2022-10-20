function isValidSubsequence (array, sequence) {

  let arrayIndex = 0;
  let sequenceIndex = 0; 

  while (arrayIndex < array.length) {

    if (sequenceIndex == sequence.length) {
      return true;
    }

    if (array[arrayIndex] == sequence[sequenceIndex]) {
      sequenceIndex++;
    }
    
    arrayIndex++;
  }

  return false;
}

//// TESTS

console.log("Starting tests:");

{
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1,9];
  const expected = false;
  const result = isValidSubsequence(array,sequence);
  console.log((result === expected) ? 'passed' : "failed");
}

{
  const array = [1];
  const sequence = [1];
  const expected = true;
  const result = isValidSubsequence(array,sequence);
  console.log((result === expected) ? 'passed' : "failed");
}

{
  const array = [];
  const sequence = [];
  const expected = true;
  const result = isValidSubsequence(array,sequence);
  console.log((result === expected) ? 'passed' : "failed");
}