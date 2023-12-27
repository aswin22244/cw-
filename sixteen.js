// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.




function sumMix(x) {
    const sum = x.reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0);

    return sum; 
}

console.log(sumMix([9, 3, '7', '3']));  
