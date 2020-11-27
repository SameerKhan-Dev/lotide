//// FUNCTIONS FOR TESTING ASSERTIONS /////

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
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.

*/



const map = function(array, callback) {
  // empty for now :

  const results = [];

  for (let itemIndex in array) {
    
    results.push(callback(array[itemIndex]));
  }

  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
//
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);


const numbersArray = [1, 2, 8, 14, 21];
const numbersDoubled = map(numbersArray, number => number * 2);

assertArraysEqual(numbersDoubled, [2,4,16,28,42]);


/// test if its an array of objects

const carsObjectsArray = {

  carOne:{ speed: 384, color: "orange", fast: true},
  carTwo:{ speed: 124, color: "orange", fast: true},
  carThree:{ speed: 30, color: "yellow", fast: false},
  carFour:{ speed: 55, color: "blue", fast: false},

};


const carSpeeds = map(carsObjectsArray, function(car) {
    
  return (car.speed - 1);

});

assertArraysEqual(carSpeeds,[383,123,29,54]);

