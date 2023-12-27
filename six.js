// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
  
array=[6, 2, 1, 8, 10 ];


function sumArray(array) {
    let lastdigit=array.length
    return array.sort((a,b)=>a-b)
    }

    console.log(sumArray(array));
    console.log(lastdigit);