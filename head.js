// Function implementation.

const assertEqual = require('./assertEqual');

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
module.exports = head;
