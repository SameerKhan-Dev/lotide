/// SUPPORTING FUNCTIONS BELOW FOR TESTING/ASSERTIONS ////
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
  CHALLENGE: Implement (middle) function which will take in an array and return the middle-most element(s) of the given array.
  General Notes:
  1) The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned array could/vary depending on input array.
  2) i.e For arrays with 1 or 2 elements, there is no middle -- Return an empty array.
  3) i.e For arrays with odd number of elements (i.e input array has odd number of contents/elements)-- Return an array containing the single middle element in the array.
  4) i.e For arrays with an even number of elements (i.e input array has even number of elements) -- Return an array containing the two elements in the middle.
*/

/*
  PSEUDOCODE:
  -- Inputs to function is an array containing elements.
  -- Output is an array returned that contains the middle element(s).
  
  1) Declare a variable middleElementsArray, an array that is empty at first, that will hold the middle elements values.
  2)Use conditional if statements to determine if: i.e array has no element or single or only two elements
      - return an empty array.
  3)Else: (i.e this means that the input has 3 or greater number of elements)
      A) Use a for-loop to iterate through the input array.
      a) Determine if input array has even or odd number of elements (i.e inputArray.length % 2 ===0 means even else odd)
      b) if (even):
          -- Find indices equal to indices of the middle values : apply formula: can get the (inputArray.length-1)/2  (which is a decimal), and the floor it to get first middle element, and ceil it to get the second middle element.
          -- Store middle values into output array middleELementsArray using .push method:
          --
      c) else (i.e its odd)
          -- Find index equal to index of the middle value : apply formula: inputArray.length /2 -- then floor this value.
          -- Store middle value into output array middleElementsArray using .push method.
  
  4) Return middleElementsArray.
*/

const middle = function(inputArray) {

  // Initialize middleElementsArray that will hold the middle values.
  let middleElementsArray = [];
  let arrLen = inputArray.length;
  // check if array has 0, 1, 2 values only. Return empty array.
  if (arrLen === 0 || arrLen === 1 || arrLen === 2) {
    return middleElementsArray;

  } else {  // i.e array has (3) or more elements

    for (let i = 0; i < arrLen; i++) {

      if (arrLen % 2 === 0) {  // array has even number of elements
        // check if current index equals the index of middle values, if yes then store current element's value into middleElementsArray
        if (i === Math.floor((arrLen - 1) / 2) || i === Math.ceil((arrLen - 1) / 2)) {
          middleElementsArray.push(inputArray[i]);
        }

      } else { // array has odd number of elements
        // check if current index equals the index of the middle value, if yes then store current element's value into middleElementsArray
        if (i === Math.floor((arrLen - 1) / 2)) {
          middleElementsArray.push(inputArray[i]);
        }

      }

    }
  }
  // return the array containing the middle values.
  return middleElementsArray;

};


// TEST CASES //

///////TEST CASES -- All should have Assertion passed if our middle function is functioning correctly.////////

// odd (7) elements
assertArraysEqual(middle([0,1,2,3,4,5,6]), [3]); // expected Assertion Passed for all cases
// odd (7) elements
assertArraysEqual(middle([19,1,5,22,1,3,5]), [22]); // expected Assertion Passed for all cases
// odd (9) elements
assertArraysEqual(middle([23,1,5,73,1,5,5]), [73]); // expected Assertion Passed for all cases
// even (4) elements
assertArraysEqual(middle([28,1,3,45]), [1,3]); // expected Assertion Passed for all cases
// even (10) elements
assertArraysEqual(middle([18,12,4,5,6,7,7,9,10,23]), [6,7]); // expected Assertion Passed for all cases
// empty array
assertArraysEqual(middle([]), []); // expected Assertion Passed for all cases
// array with 1 element only
assertArraysEqual(middle([19]), []); // expected Assertion Passed for all cases
// array with 2 elements only
assertArraysEqual(middle([1,5]), []); // expected Assertion Passed for all cases

// some other test cases:
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);

assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);

assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);





