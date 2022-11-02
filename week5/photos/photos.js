const checkIfPhotoIsPossible = (redShirtsHeights, blueShirtsHeights) => {
  
  redShirtsHeights.sort();
  blueShirtsHeights.sort();

  const greaterHeightColor = redShirtsHeights[0] > blueShirtsHeights[0] ? "red" : "blue";
  const arrayLength = blueShirtsHeights.length;

  for (let i = 0; i < arrayLength; i++) {
    if (redShirtsHeights[i] < blueShirtsHeights[i] && greaterHeightColor === "red") return false;
    if (redShirtsHeights[i] >= blueShirtsHeights[i] && greaterHeightColor === "blue") return false;

    if (i === arrayLength-1 && greaterHeightColor === "red") return `true => place redshirts on the back row`;
    if (i === arrayLength-1 && greaterHeightColor === "blue") return `true => place blueshirts on the back row`;
  }

  return false;
}

{
  const redShirtsHeights = [5, 8, 1, 3, 4];
  const blueShirtsHeights = [6, 9, 2, 4, 5];
  
  const res = checkIfPhotoIsPossible(redShirtsHeights, blueShirtsHeights);
  console.log(res);
}

{
  const redShirtsHeights = [];
  const blueShirtsHeights = [];
  
  const res = checkIfPhotoIsPossible(redShirtsHeights, blueShirtsHeights);
  console.log(res);
}

{
  const redShirtsHeights = [5];
  const blueShirtsHeights = [0];
  
  const res = checkIfPhotoIsPossible(redShirtsHeights, blueShirtsHeights);
  console.log(res);
}

{
  const redShirtsHeights = [5];
  const blueShirtsHeights = [5];
  
  const res = checkIfPhotoIsPossible(redShirtsHeights, blueShirtsHeights);
  console.log(res);
}

{
  const redShirtsHeights = [5, 8];
  const blueShirtsHeights = [6, 9];
  
  const res = checkIfPhotoIsPossible(redShirtsHeights, blueShirtsHeights);
  console.log(res);
}

{
  const redShirtsHeights = [5, 8];
  const blueShirtsHeights = [6, 6];
  
  const res = checkIfPhotoIsPossible(redShirtsHeights, blueShirtsHeights);
  console.log(res);
}

// we can sort both arrays in place

// who's in the back row is decided by the first element of the array

// and then compare each value from array1 to be > array2

// if not => return false

// return true