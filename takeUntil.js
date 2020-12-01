////////// FUNCTIONS TO SUPPORT TESTING ASSERTIONS //////////

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


const assertArraysEqual = function(arrayOne, arrayTwo) {

  if (eqArrays(arrayOne,arrayTwo)) {
    console.log("😀️😀️😀️ Assertion Passed: " , arrayOne," === ", arrayTwo);
  } else {
    console.log("😡️😡️😡️ Assertion Failed: " , arrayOne, " !== ",arrayTwo);
  }
};


/*

We will be implementing a function quite similar to this one (takeWhile in lodash), but isn't present in their library: takeUntil.

It will take in two parameters as well:

The array to work with
The callback (which Lodash calls "predicate")

The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.

*/

/*
  CHALLENGE: Implement takeUntil function which will keep collecting items from a provided array until the callback provided returns a truthy value;


*/

const takeUntil = function(array, callback) {
  
  /*
    PSEUDOCODE:
    iterate through entire array elements and call the callback function on each element
    the callback function returns either true or false based on the criteria provided in the callback function.
    

  */

  let resultsArray = [];

  for (let i = 0; i < array.length; i++) {

    if (callback(array[i])) {
      resultsArray = array.slice(0,i);
      return resultsArray;
    }
  }

  return resultsArray;

};

// TESTCASES:

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

//console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);



/// TESTING USING ASSERTIONS

assertArraysEqual(results1,[1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);


module.exports = takeUntil;