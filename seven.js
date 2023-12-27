// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  
    const avaragescore=(s1+s2+s3)/3;
    
    if(avaragescore >=90&& avaragescore <=100){
      return 'A';
    }else if( avaragescore >=80 && avaragescore <=90){
      return 'B';
    }else if( avaragescore >=70 && avaragescore <=80){
      return 'C';
    }else if (avaragescore >=60 && avaragescore <=70){
      return 'D';
    }else if(avaragescore >=0 && avaragescore <60){
      return 'F'
    }
  
  }

  const s1=90;
  const s2=90;
  const s3=90;
  console.log( getGrade (s1, s2, s3));