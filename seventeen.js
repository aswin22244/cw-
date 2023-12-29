// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"


// function accum(s) {
//     return s.split('').map((char, index) => {
//       return char.toUpperCase() + char.toLowerCase().repeat(index);
//     }).join('-');
//   }

function accum(s){
    return s.split("").map((char,index)=>{
        return char.toUpperCase()+char.toLowerCase().repeat(index);
    }).join("-")
}

console.log(accum("abcd"));