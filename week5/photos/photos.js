const checkIfPhotoIsPossible = (redShirtsHeights, blueShirtsHeights) => {
  
  redShirtsHeights.sort();
  blueShirtsHeights.sort();

  if (redShirtsHeights[0] > blueShirtsHeights[0]) {
    for (let i = 0; i < redShirtsHeights.length; i++) {
      if (redShirtsHeights[i] <= blueShirtsHeights[i]) return false;
    }

    return `true => place redshirts on the back row`;

  } else if (redShirtsHeights[0] < blueShirtsHeights[0]) {
    for (let i = 0; i < redShirtsHeights.length; i++) {
      if (redShirtsHeights[i] >= blueShirtsHeights[i]) return false;
    }

    return `true => place blueshirts on the back row`;

  } else {
    return false;
  }
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