const eqArrays = require('./eqArrays');




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


module.exports = assertArraysEqual;
