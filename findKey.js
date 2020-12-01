
// ///////SUPPORTING FUNCTIONS FOR TESTING ASSERTIONS ///////////////

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
Implement the function findKey which takes in an object and a callback.
 It should scan the object and return the first key for which the callback
 returns a truthy value. If no key is found, then it should return undefined.

*/

const findKey = function(theObject, callback) {

  // use for-of loop to iterate through the object keys
  for (let item in theObject) {
    // use callback function on every key. If truthy value is returned from call-back, then return the key.
    if (callback(theObject[item])) {
      return item;
    }
  }
  // key not found which matches the callback function criteria, i.e return undefined.
  return undefined;
};




/// TEST CASES///

let object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let result1 = findKey(object1, (x => x.stars === 2));

assertEqual(result1,"noma");


let object2 = {
  car: "racing Car",
  sport: "baseball",
  town:  "montreal",
  tvShow: "mandalorian",
  education: "college"
};

let result2 = findKey(object2, (x => x === "baseball"));

assertEqual(result2,"sport");

let object3 = {
  car: "racing Car",
  sport: "baseball",
  town:  "montreal",
  tvShow: "mandalorian",
  education: "college"
};

let result3 = findKey(object3, (x => x === "soccer"));

assertEqual(result3,undefined);


module.exports = findKey;