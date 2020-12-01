/// SUPPORTING FUNCTIONS BELOW FOR TESTING/ASSERTIONS ////

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

module.exports = middle;






