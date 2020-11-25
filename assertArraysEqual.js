const eqArrays = function(arrOne, arrTwo) {

  // arraysMatch is a boolean used to keep track of if the arrays match (true) or do not match (false)
  let arraysMatch = true;

  // confirm that both arrays are the same length
  if (arrOne.length === arrTwo.length) {

    // use a for-loop to iterate through each element in the array and compare the total
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    
  } else {
    return false;
  }
 
  return arraysMatch;
};


/*
  CHALLENGE: Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

*/

/*
  Overview:
  1) The function has inputs of the two arrays that are to be compared.
  2) Output will be a console.log message based on if the arrays are similar or not.
  3) To check if the arrays are similar make use of the eqArrays function above.
  PsuedoCode:
  1) Call the eqArrays function and send the arrays parameters as arguments to the eqArrays function.
  2) Based on returned value of eqArrays function:
    if true: then console.log a message saying assertion passed.
    if false: then console.log a message saying assertion failed.
  
*/

const assertArraysEqual = function(arrayOne, arrayTwo) {

  if (eqArrays(arrayOne,arrayTwo)) {
    console.log("😀️😀️😀️ Assertion Passed: " , arrayOne," === ", arrayTwo);
  } else {
    console.log("😡️😡️😡️ Assertion Failed: " , arrayOne, " !== ",arrayTwo);
  }
};



// Test Cases: (All passed!)

//assertArraysEqual([1,2,3], [1,2,3]); // expected Assertion passed.

//assertArraysEqual([1,4,6],[3,5,7]); // expected Assertion failed.

//assertArraysEqual([1,3,"4"],[1,3,4]); // expected Assertion failed.

//assertArraysEqual([1,2],[1,2,3]); // expected Assertion failed.


