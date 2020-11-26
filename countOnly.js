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

/* CHALLENGE OVERVIEW:

Let's work together to implement CountOnly function.
Function Input: This function should take in a collection of items and return counts for a specific subset of those items.
Note:
-- Function will not count everything. In order to decide what to count, it will also be given an idea of which items we care about
   and it will only count those, ignoring the others.
   NOTE: Items in our case will be limited to Strings.

Inputs: Given an Array and an Object. Array of data points that each is one of the keys in the Object (i.e each value is a key, values can be repeated in array).
        Object has keys of value types, and if a specific key's value is true, we want to count that value type/key occurrence in the array.
        If a specific key's value is false, we don't keep count of values in array that fall under that data type / key.

Output: Return an object with only specific keys that had true values in input object, along with the number of instances of that key in the array as the key's value in the new object.'

Key's count should be greater than 0, to be included in the final object otherwise excluded.
*/

// SOLUTION //

// allItems: an array of strings that we need to look through
// itemsCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {

  const results = {};

  for (const item of allItems) {
    // check if current item in array exists as a key in the itemsToCount Object.
    if (itemsToCount[item]) {
      //console.log(item);
      // check if current element which is a key, if that already exists in the results array or not.
      if (results[item]) {
        // key already exists so just increment its value by 1.
        results[item] += 1;
            
      } else {
        // this means that result does not have this key/element initiated/existing in the results object at this point.
        // add this key to the results array and add count to it (i.e add 1).
      
        results[item] = 1;

      }
    }
  }


  console.log(results);
  return results;
};


// TEST CASES //

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);