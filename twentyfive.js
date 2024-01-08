// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


    function grow(x) {
        const product = x.reduce((accumulator, currentValue) => {
            return accumulator * currentValue;
        }, 1); // Change initial value to 1 for multiplication
    
        return product;
    }
    
    console.log(grow([1, 2, 3, 4])); 
    