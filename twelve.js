// Write a function which calculates the average of the numbers in a given list.



// Note: Empty arrays should return 0.


function findAverage(array) {
  const length = array.length;
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const average = sum / length;
  return average;
}


  const array=[1,2,3,4,5]
console.log( findAverage(array) );


