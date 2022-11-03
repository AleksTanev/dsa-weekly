const checkIfPhotoIsPossible = (redShirtsHeights, blueShirtsHeights) => {

  redShirtsHeights.sort();
  blueShirtsHeights.sort();

  const isRedHigher = redShirtsHeights[0] > blueShirtsHeights[0] ? true : false;
  const arrayLength = blueShirtsHeights.length;

  if (!arrayLength) return false;

  for (let i = 0; i < arrayLength; i++) {
    if (redShirtsHeights[i] < blueShirtsHeights[i] && isRedHigher) return false;
    if (redShirtsHeights[i] >= blueShirtsHeights[i] && !isRedHigher) return false;
  }

  return isRedHigher ? `true => place red on the back row` : `true => place blue on the back row`;
};

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

