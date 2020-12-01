// FUNCTIONS TO TEST ASSERTIONS AND TEST CASES //

const assertEqual = function(actual, expected) {

  // if actual value matches expected value then print out assertion passed message
  if (actual === expected) {

    console.log(`😀️😀️😀️ Assertion Passed: ${actual} === ${expected}`);

  } else {
    // print out assertion failed message if actual value does not match expected value
    console.log(`😡️😡️😡️ Assertion Failed: "${actual}" !== "${expected}"`);

  }
};


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

/////////////CHALLENGE //////////////////////////
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





// TEST CASES FOR PRIMITIVE DATA TYPES FOR VALUES IN KEYS //

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab,ba),true);


const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,abc),false);


const anObject = {car: "dodge", model: "2006",city:"Toronto"};
const anObject2 = {model: "2006", car:"dodge",city: "Toronto"};

assertEqual(eqObjects(anObject,anObject2),true);



// // TEST CASES FOR ARRAYS AS VALUES INSIDE KEYS //

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd,dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd,cd2),false);

const carObject = {car: "dodge", model: "2006",city:"Toronto", made: "can"};
const carObject2 = {model: "2006", car:"dodge",city: "Toronto"};

assertEqual(eqObjects(carObject,carObject2),false);


const cool = { c: "1", d: ["2", 3],e:"yoyo",f:["hello","from","the",3,4] };
const cool2 = { f:["hello","from","the",3,4], c: "1",d: ["2", 3],e:"yoyo"};

assertEqual(eqObjects(cool,cool2),true);


const testOb = { c: "1", d: ["2", 3],e:"yoyo",g:["hello","from","the",3,4] };
const testOb2 = { c:["hello","from","the",3,4], g: "1",d: ["2", 3],e:"yoyo"};

assertEqual(eqObjects(testOb,testOb2),false);

const cdA = { c: "1", d: ["2", 3] };
const dcA = { d: ["2", 3], c: 1 };

assertEqual(eqObjects(cdA,dcA),false);

/// End of file



module.exports = eqObjects;