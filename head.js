// Function implementation
// this function checks if actual value of a given function matches the expected value.
const assertEqual = function(actual, expected) {

  // if actual value matches expected value then print out assertion passed message
  if (actual === expected) {

    console.log(`😀️😀️😀️ Assertion Passed: ${actual} === ${expected}`);

  } else {
    // print out assertion failed message if actual value does not match expected value
    console.log(`😡️😡️😡️ Assertion Failed: "${actual}" !== "${expected}"`);

  }
};

// this function returns the first/head element of a given array.
const head = function(arrayOfValues) {

  // check if array is empty, if it is then return: undefined
  if (arrayOfValues.length === 0) {
    return undefined;
  } else {
    // return head element or (first) element of array.
    return (arrayOfValues[0]);

  }
};

// Writing Test Cases: // if both cases are true i.e assertion passed then the test case passed.

assertEqual(head([5,6,7]),5);

assertEqual(head(["Hello","Lighthouse","Labs"]), "Hello");

// empty array test case
assertEqual(head([]),undefined);
// array with single element test case
assertEqual(head([1]),1);

