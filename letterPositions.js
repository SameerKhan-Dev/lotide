//// FUNCTIONS FOR TESTING / ASSERTIONS TESTING ////
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
  Challenge Requirements:

  Inputs: a string (sentence)
  Output: an object of arrays. The keys are the individual characters found in the string. The values of the keys are the arrays holding the indices of where that key is found inside the string.

  PSEUDOCODE:
  1) Declare an empty object (results) that will be returned as results with all the keys and values (arrays) added to it.
  2) Use a for loop to go through the string.
  3) Use an if-statement to make sure current character is not a white-space, if it is then do nothing i.e skip it and go to next element in interation.
  3) Check if existing current element (character) exists as a key inside the results Object. -- if(results[element]) -- if true then it exists.
      a) if (results[element]) --> then push the current element index into the results[element].push(i); i = current index.
      b) else (i.e current element or character does not exist inside the object as a key):
          -- add this as a key and assign to it a value of an empty array. results[element] = []; and then push the current index i into this key as the value in the array.
  4) Return the results object.
*/

const letterPositions = function(sentence) {
  
  // declare empty variables
  const results = {};
  let charKey = "";
  // use for loop to iterate over input string (sentence)
  for (let i = 0; i < sentence.length; i++) {
    charKey = sentence[i];
    // check if current element/character is a blank space or not. if it is blank space we do nothing and go to next iteration.
    if (charKey !== " ") {
      // check if current element exists as a key in the results object, if it does push the index into the key's value/array.
      if (results[charKey]) {

        results[charKey].push(i);

      } else { // current element/character does not exist as a key in the results object. So first initialize the key as an empty array and then push the current index into the key's value/array.
        
        results[charKey] = [];
        results[charKey].push(i);
      }
    }

  }
  // return the output object containing key value pairs.
  return results;

};


// TEST CASES //


// first string: "lighthouse in the house"
const testObjectOne = letterPositions("lighthouse in the house");

assertArraysEqual(testObjectOne["l"], [0]);
assertArraysEqual(testObjectOne["i"], [1,11]);
assertArraysEqual(testObjectOne["g"], [2]);
assertArraysEqual(testObjectOne["h"], [3,5,15,18]);
assertArraysEqual(testObjectOne["t"], [4,14]);
assertArraysEqual(testObjectOne["o"], [6,19]);
assertArraysEqual(testObjectOne["u"], [7,20]);
assertArraysEqual(testObjectOne["s"], [8,21]);
assertArraysEqual(testObjectOne["e"], [9,16,22]);
assertArraysEqual(testObjectOne["n"], [12]);


// second string: "cool car"
const testObjectTwo = letterPositions("cool car");

assertArraysEqual(testObjectTwo["c"], [0,5]);
assertArraysEqual(testObjectTwo["o"], [1,2]);
assertArraysEqual(testObjectTwo["l"], [3]);
assertArraysEqual(testObjectTwo["a"], [6]);
assertArraysEqual(testObjectTwo["r"], [7]);

// third string: "hello"
const testObjectThree = letterPositions("hello");

assertArraysEqual(testObjectThree["h"], [0]);
assertArraysEqual(testObjectThree["e"], [1]);
assertArraysEqual(testObjectThree["l"], [2,3]);
assertArraysEqual(testObjectThree["o"], [4]);
