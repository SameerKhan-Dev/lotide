
/////////FUNCTIONS TO HELP WITH TESTING / ASSERTIONS //////////

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
  '';
  return arraysMatch;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {

  if (eqArrays(arrayOne,arrayTwo)) {
    console.log("😀️😀️😀️ Assertion Passed: " , arrayOne," === ", arrayTwo);
  } else {
    console.log("😡️😡️😡️ Assertion Failed: " , arrayOne, " !== ",arrayTwo);
  }
};



/*


Given an array with other arrays inside, flatten it into a single-level array.
// code should deal with nested arrays

*/

/*

Input : array of values
Output: result arrays with all values in a single array

*/
// declare global array that we can append values to;
const performRecursionAsRequired = function(array, resultingArray) {

  // if element is not an array we directly add it to the resultArray;
  // iterate through array elements and push them into the results Array;
  for (let x = 0; x < array.length; x++) {

    if (Array.isArray(array[x])) {
      // call the function (use recursive call)
      performRecursionAsRequired(array[x], resultingArray);

    } else {
      // add current element into the result array
      resultingArray.push(array[x]);

    }

  }

  return resultingArray;
  

};

const flatten = function(array) {

  // declare an empty array to hold final results single flat array
  let resultArray = [];

  resultArray = performRecursionAsRequired(array, resultArray);

  return resultArray;
};



/// TEST CASES ///
/*

let arrayOne = [1, 2, [3, 4], 5, [6]];
let expectedResult = [1,2,3,4,5,6];

let result1 = flatten(arrayOne);

assertArraysEqual(result1,expectedResult);

// Second Test Case
let arrayTwo = [["a",2,3,[4,5,[1,2,5,9]]],"cool", 34, [3, 4], [5,4,2,"tool"], [6.1]];
let expectedResult2 = ["a", 2,3,4,5,1,2,5,9,"cool",34,3,4,5,4,2,"tool",6.1];


let result2 = flatten(arrayTwo);
//console.log(result2);
assertArraysEqual(result2,expectedResult2);


*/


module.exports = flatten;