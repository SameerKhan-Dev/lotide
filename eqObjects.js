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
  console.log("function entered properly");
  console.log("the arrOne is", arrOne);
  console.log("the arrTwo is", arrTwo);
  // confirm that both arrays are the same length
  if (arrOne.length === arrTwo.length) {
    console.log("same length inside eqArrays");
    // use a for-loop to iterate through each element in the array and compare the total
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
       
        return false;
      
      }
    }
    
  } else {
    return false;
  }
  console.log("arraysMatch is:",arraysMatch);
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

const eqObjects = function (object1, object2){
  /*
  // // TEST CASES FOR ARRAYS AS VALUES INSIDE KEYS //

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd,dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd,cd2),false);

  */

  // assume isIdenticalKey is false as a start.
  let isIdenticalKey = false;
  // check if objects are same length. If yes then continue to next logic inside if-statement.
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;  
  }
  // for of-loop to iterate through first object1
  for(let item in object1){
    // set isIdenticalKey to false for this iteration
    //isIdenticalKey = false; 
    //if(Array.isArray(object1[item])){
      //console.log(`${object1[item]} is an array`);
    //}
    // for-of loop to iterate through second object2
    for(let value in object2){

      if(Array.isArray(object1[item])){  
          //console.log(`${object1[item]} is an array`);

        if(Array.isArray(object2[value])){
          //console.log(`${object2[value]} both are arrays`);
          if (eqArrays(object1[item], object2[value])){
           
            console.log("eqArrays has been called and a match found");
            isIdenticalKey = true;
         // }
          }
        }
      }
      if(typeof(object1[item]) === typeof(object2[value])){
        //console.log("Yippie");
        // check if both are arrays
        //--console.log(typeof(object1[item]));
        //--console.log(typeof(object2[value]));
        //--console.log("same type");
       // console.log(`This is the object1[item]: ${object1[item]} .`);
        /*if(Array.isArray(object1[item])){
          console.log("item is an array");
          if(Array.isArray(object2[value])){
            console.log("value is an array");
            //if (eqArrays(object1[item], object2[value]) === true){
            
              //isIdenticalKey = true;
            //}
          
          } 
          else {
            console.log("value is not an array");
          }
          

        } 
          // if not type array-- check if currrent value(key) in object2 matches item key from object1. Also check if value matches.
        else {
          console.log("item is not an array");
        } */
        //else if (item === value  && object1[item] === object2[value]){
          // set isIdenticalKey to true because key match exists (i.e same key with same value in both objects).
          //isIdenticalKey = true;
        //}
      
      } 
      else {
        //--console.log(typeof(object1[item]));
        //--console.log(typeof(object2[value]));
        //--console.log("not same type");
        
      }
      
    }
    //
    if(!isIdenticalKey){
      //return false;
    }

  }

  //return true;

};



/*

// TEST CASES FOR PRIMITIVE DATA TYPES FOR VALUES IN KEYS //

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab,ba),true);


const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,abc),false);



//const oneObject = {};
//const twoObject = {};

//assertEqual(eqObjects(oneObject,twoObject),true);

const anObject = {car: "dodge", model: "2006",city:"Toronto"};
const anObject2 = {model: "2006", car:"dodge",city: "Toronto"};

assertEqual(eqObjects(anObject,anObject2),true);

*/

// // TEST CASES FOR ARRAYS AS VALUES INSIDE KEYS //

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd,dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };

//assertEqual(eqObjects(cd,cd2),false)
