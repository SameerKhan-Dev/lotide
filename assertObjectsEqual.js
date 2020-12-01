
// FUNCTIONS TO TEST ASSERTIONS AND TEST CASES //



const eqArrays = function(arrOne, arrTwo) {

  // arraysMatch is a boolean used to keep track of if the arrays match (true) or do not match (false)
  let arraysMatch = true;

  if (arrOne.length === arrTwo.length) {

    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
       
        return false;
      
      }
    }
    
  } else {
    return false;
  }
  
  return arraysMatch;
};


/*
  Description:
  Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
  // Return true if both objects have identical keys with identical values.
  // Otherwise if keys are not identical return false.


*/

// Returns true if both objects have identical keys with identical values.

// Otherwise return false.

const eqObjects = function(object1, object2) {


  // assume isIdenticalKey is false as a start.
  let isIdenticalKey = false;
  // check if objects are same length. If yes then continue to next logic inside if-statement.
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // for of-loop to iterate through first object1
  for (let item in object1) {
    // set isIdenticalKey to false for this iteration
    isIdenticalKey = false;
    // for of-loop to iterate through second object2
    for (let value in object2) {
      ///////////////////////// if we are searching for an array enter if statement
      if (Array.isArray(object1[item])) {
     
        // check of second objects value is an array as well or not.
        if (Array.isArray(object2[value])) {
          //console.log(`${object2[value]} both are arrays`);
          if (eqArrays(object1[item], object2[value])) {
            if (item === value) {
              isIdenticalKey = true;
            }
          }
        }
      } else {
        // check if both elements in object keys are of same type , if yes then proceed
        if (typeof(object1[item]) === typeof(object2[value])) {
          // check if keys are same and values are same
          if (item === value  && object1[item] === object2[value]) {
            // set isIdenticalKey to true because key match exists (i.e same key with same value in both objects).
            isIdenticalKey = true;
          }

        }
        
      }
    
    }
    // If object1's matching key and value is not found in the second object (meaning isIdentical is still false), then can return false.
    if (isIdenticalKey === false) {
      return false;
    }

  }
  // return true because all keys have matched, objects are equal / have same keys with same values.
  return true;
};
//////////////////////////////////////////////////////

////////CHALLENGE!!!!!!!!!!!!!!!!!!!!!!!//////////////

/////////////////////////////////////////////////////

/*
  Description:
  Implement a function called: assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.


*/
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  
  if (eqObjects(actual,expected)) {
    console.log("😀️😀️😀️ Assertion Passed: " , actual," === ", expected);
  } else {
    console.log("😡️😡️😡️ Assertion Failed: " , actual, " !== ",expected);
  }

};
/*

// TEST CASES   -- ALL OUTPUTS ARE AS EXPECTED i.e either assertion passed or failed//

const obj1 = {
  car: "ford",
  house: "big",
  color: "green"
};

const obj2 = {
  car: "ford",
  color: "green",
  house: "big",
};

// expected for assertion to pass
assertObjectsEqual(obj1, obj2);

const obj3 = {
  cars: ["honda","ford", 3, 5, true],
  house: "big",
  color: "green"
};

const obj4 = {
  cars: ["ford","honda", true, 3, 5],
  color: "green",
  house: "big",
};
// expected for assertion to fail
assertObjectsEqual(obj3, obj4);

const obj5 = {
  cars: ["honda","ford", 3, 5, true],
  house: "big",
  color: "green",
  pet: "dog"
};

const obj6 = {
  cars: ["honda","ford", 3, 5, true],
  house: "big",
  color: "green"
};
// expected for assertion to fail
assertObjectsEqual(obj5, obj6);


const obj7 = {
  cars: ["honda","ford", 3, 5, true],
  house: "big",

};

const obj8 = {
  cars: ["honda","ford", 3, 5, true],
  house: "big",
 
};
// expected for assertion to pass
assertObjectsEqual(obj7, obj8);
*/


module.exports = assertObjectsEqual;