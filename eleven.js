// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"


function sumStr(a,b) {
  
    let add=Number(a)+Number(b);
    return add.toString()
  }

  let a="50";
  let b="30";
  console.log( sumStr(a,b));


  