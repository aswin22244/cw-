// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

function descendingOrder(n){
    let out=n.sort((a,b)=>a-b)
    return out
  }

  console.log(descendingOrder(42145));