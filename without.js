// ASSISTANT FUNCTION BUILT IN OTHER FILES JUST COPIED AND PASTED OVER

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


// SECOND ASSISTANT FUNCTION:

const assertArraysEqual = function(arrayOne, arrayTwo) {

  if (eqArrays(arrayOne,arrayTwo)) {
    console.log("😀️😀️😀️ Assertion Passed: " , arrayOne," === ", arrayTwo);
  } else {
    console.log("😡️😡️😡️ Assertion Failed: " , arrayOne, " !== ",arrayTwo);
  }
};

////////////////////////////////// ACTUAL CHALLENGE //////////////////////////////////////////////

// CHALLENGE: Implement a "without" function which will return a subset of a given array, removing unwanted elements.
// NOTE: nested arrays and objects are excluded from scope of this assignment/challenge. I.e the arrays will hold primitive data types only (i.e basic: integers, boolean, strings, etc.)
/*
  Description:
  The function should take in a "source" array and "itemsToRemove" array. It should return a new array with only
  those elements from "source" array that are not present in the "itemsToRemove" array.

  PSUEDOCODE:
  1) Have to do a 2D array to compare each value in source array to entire array of itemsToRemove array to check if its present.
    -- if value is not present then store it into another empty array that will eventually be returned carrying only the values that we allow/want.
  2) Return the array of elements that are allowed and notOpart of "itemsToRemove" array.

*/

const without = function(source, itemsToRemove) {

  // declare empty array that will contain all allowable values that are in source (i.e not found in itemsToRemove list but found in source array).
  let arrayAllowable = [];
  // this boolean variable is used to track if element is allowed to be added to arrayAllowable or not. Initially set to true.
  let addElement = true;

  // use nested for-loops to go through source array, comparing each value with entire itemsToRemove array to check if any overlap
  for (let i = 0; i < source.length; i++) {
    // reset addElement to true during every traversal
    addElement = true;
    for (let x = 0; x < itemsToRemove.length; x++) {
      // check if current element of source matches the current element of itemsToRemove array. If value is not allowable, hence addElement is set to false.
      if (source[i] === itemsToRemove[x]) {
        addElement = false;
      }
    }
    // check if addElement is still true, if it is then append current source's element's value into the arrayAllowable array.
    if (addElement) {
      arrayAllowable.push(source[i]);
    }

  }
  // return array of allowable values.
  return arrayAllowable;
};




///////TEST CASES -- All should have Assertion passed if our without function is functioning correctly.////////

assertArraysEqual(without([1, 2, 3], [1]), [2,3]); // expected Assertion Passed for all cases
 
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]);

assertArraysEqual(without(["4", "5", "3"], [1, "hello", "3"]),["4","5"]);

assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]),[]);

// another test case:  check to make sure that the without function should be returning a new array and not modify the original array that is passed in.


const words = ["hello", "world", "lighthouse"];

without(words,["lighthouse"]); // no need to capture return value for this test case

// make sure the original array was not altered by the without function
assertArraysEqual(words,["hello", "world", "lighthouse"]); // should console.log assertion passed.


