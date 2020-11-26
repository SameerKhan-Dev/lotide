// FUNCTIONS TO HELP US TEST ASSERTIONS //

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
  CHALLENGE DESCRIPTION:

  1) Implement the function findKeyByValue which takes in an object and a value.
  2) It should scan the object and return the first key which contains the given value.
  3) If no key with that given value is found, then it should return undefined.

  PSEUDOCODE:
  Input: object which contains keys and values to scan.  And a value, the value that we are looking for inside the object.
  Output: First key found that has value = value. If no value found return undefined.

*/

const findKeyByValue = function(objToScan, value) {

  // We can use a for-of loop to go through the object
  for (let item in objToScan) {
  // additional filter for object properties
    if (Object.prototype.hasOwnProperty.call(objToScan, item)) {
    // Check the current key's/item's value, if it matches then return the key.
      if (objToScan[item] === value) {
      // return key if there is a match
        return item;
      }
    }
  }

  // after for-of loop if item has not been return this means that the value is not found inside the object
  // return undefined.

  return undefined;

};

// TEST CASES PROVIDED //

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// ADDITIONAL TEST CASES //

const bestTVShowsByGenre2 = {
  sci_fi: "",
  comedy: "Avatar",
  drama:  "Basketball Game"
};

assertEqual(findKeyByValue(bestTVShowsByGenre2, "Basketball Game"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre2, "Avatar"), "comedy");

