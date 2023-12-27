// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False


String.prototype.isUpperCase = function() {
     return this.valueOf() === this.valueOf().toUpperCase();

   }

   var str1 = "HELLO";
console.log(str1.isUpperCase()); 

var str2 = "Hello";
console.log(str2.isUpperCase()); 