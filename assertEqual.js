
// Function implementation

const assertEqual = function(actual, expected) {

  // if actual value matches expected value then print out assertion passed message
  if (actual === expected) {

    console.log(`😀️😀️😀️ Assertion Passed: ${actual} === ${expected}`);

  } else {
    // print out assertion failed message if actual value does not match expected value
    console.log(`😡️😡️😡️ Assertion Failed: "${actual}" !== "${expected}"`);

  }
};





module.exports = assertEqual;
