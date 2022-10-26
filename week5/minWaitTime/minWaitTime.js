const minimumWaitingTime = (queries) => {

  queries.sort();

  let totalSum = 0;
  let currentQueryTime = 0;

  for (let i = 0; i < queries.length; i++) {
    totalSum += currentQueryTime;
    currentQueryTime += queries[i];
  }

  return totalSum;
};

{
  const queries = [1, 2, 2, 3]

  console.log(minimumWaitingTime(queries))
}