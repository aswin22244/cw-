// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

let string="Robin Singh" 

function stringToArray(string){

	return string.split(' ');

}

console.log(stringToArray(string));
