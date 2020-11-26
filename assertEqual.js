
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


// TEST CODE

// comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");

// comparing identical numbers
assertEqual(1,1);

// comparing non-identical numbers
assertEqual(2,3);

// comparing identical strings
assertEqual("cool","cool");

