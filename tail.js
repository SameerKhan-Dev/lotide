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

// this function takes an array and returns the tail (i.e all elements excluding the first head element);
const tail = function(arrayOfValues) {
  // check corner case of array being empty
  if (arrayOfValues.length === 0) {
    return [];
    // check corner case of array having only a single element-- return empty array
  } else if (arrayOfValues.length === 1) {
    return [];
    
  } else {

    return (arrayOfValues.slice(1,arrayOfValues.length));

  }
};

// running Test Cases

// Test Case 1: Check the Returned Array Elements

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2); // if true makes sure we get back two elements.

assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"

assertEqual(result[1], "Labs"); // ensure second element is "Labs"



// Test Case 2: Check the Original Array

const words = ["Yoyo", "Lighthouse", "Labs"];


tail(words);

assertEqual(words.length, 3); // if passed, means original array has not been changed






// Test Case 3: Write a test Case to make sure that the original array is not modified

const originalArray = ["Hello", "Lighthouse", "Labs"];


tail(originalArray);

assertEqual(originalArray[0], "Hello"); //check first element of original array to make sure its not changed

assertEqual(originalArray[1], "Lighthouse");  // check second element of original array to make sure its not changed

assertEqual(originalArray[2], "Labs"); // check third element of original array to make sure its not changed



// Testing Empty Array

const returnedArray = tail([]);
console.log(returnedArray);

// Testing Array with single element
const returnedArray2 = tail([]);
console.log(returnedArray2);

