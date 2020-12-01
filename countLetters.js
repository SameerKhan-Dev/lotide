/// FUNCTIONS FOR TESTING OUR CODE ///

const assertEqual = function(actual, expected) {

  // if actual value matches expected value then print out assertion passed message
  if (actual === expected) {

    console.log(`😀️😀️😀️ Assertion Passed: ${actual} === ${expected}`);

  } else {
    // print out assertion failed message if actual value does not match expected value
    console.log(`😡️😡️😡️ Assertion Failed: "${actual}" !== "${expected}"`);

  }
};


/*
  Instructions:

  1) Create a function called countLetters.
  2) The should take in a sentence (as a string) and then return a count of each of the letters in the sentence.
  3) For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
  4) Before implementing this function, we need to think about how it will report back these counts. It's not
  that we want to know how many H's are in this sentence? because that would just be a number. We need it report
  back multiple numbers.
  5) Remember that we can skip and not count spaces, as seen here.

  TIPS: you can use  for...of loops with strings.

*/

/*
  PSUEDOCODE:
  Inputs: string
  Output: object with keys that are individual characters found in the input string, and count for character as the values inside the object

  1) Create an empty object (result) that will be returned at end of function when all keys as characters are added along with their counts.
  2) Use a for-of loop to iterate through the input string.
  3) Use an if-statement to make sure existing element is not a space element. if its a space do nothing / go to next element.
  4) Check if existing element of string / character already exists as key in the object or not. i.e if(result[element]) , if key exists this if statemented will be true and will be entered.
    a) if (result[element]) (means key exists in result object already)--> increment value inside object by 1. result[element] += 1.
    b) else (means key does not yet exist in result object)--> add key to the result object and assign it value 1.  result[element] = 1.
  5) Return result object when for-loop has completed executing.
*/

const countLetters = function(inputString) {
  // Create an empty object (result) that will be returned at end of function when all keys as characters are added along with their counts.
  const result = {};
  // Use a for-of loop to iterate through the input string.
  for (let item of inputString) {
    // Use an if-statement to make sure existing element is not a space element. if its a space do nothing / go to next element.
    if (item !== " ") {

      if (result[item]) {
        // key already exists in the result object. Increment count by 1 (i.e value of key increment by 1 inside result object).
        result[item] += 1;

      } else {
        // key does not already exist, so add this key and update its value/count by 1.
        result[item] = 1;

      }

    }

  }
  //Return result object when for-loop has completed executing.
  return result;

};

// TEST CASES // // All outputs should be Assertion Passed.


const objectOne = countLetters("lighthouse in the house");

assertEqual(objectOne["l"], 1);
assertEqual(objectOne["i"], 2);
assertEqual(objectOne["g"], 1);
assertEqual(objectOne["h"], 4);
assertEqual(objectOne["t"], 2);
assertEqual(objectOne["o"], 2);
assertEqual(objectOne["u"], 2);
assertEqual(objectOne["s"], 2);
assertEqual(objectOne["e"], 3);
assertEqual(objectOne["n"], 1);


const objectTwo = countLetters("total game");

assertEqual(objectTwo["t"], 2);
assertEqual(objectTwo["o"], 1);
assertEqual(objectTwo["a"], 2);
assertEqual(objectTwo["l"], 1);
assertEqual(objectTwo["g"], 1);
assertEqual(objectTwo["m"], 1);
assertEqual(objectTwo["e"], 1);

const objectThree = countLetters("bbb");

assertEqual(objectThree["b"], 3);
assertEqual(objectThree["a"], undefined);



module.exports = countLetters;
