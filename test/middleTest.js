
const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');





///////TEST CASES -- All should have Assertion passed if our middle function is functioning correctly.////////


describe("#head", () => {

  it("testing odd elements size array, should return single correct middle value ", () => {
    // odd (7) elementse
    assert.deepEqual(middle([0,1,2,3,4,5,6]), [3]); // expected Assertion Passed for all cases
    // odd (7) elements
    assert.deepEqual(middle([19,1,5,22,1,3,5]), [22]); // expected Assertion Passed for all cases
    // odd (9) elements
    assert.deepEqual(middle([23,1,5,73,1,5,5]), [73]); // expected Assertion Passed for all cases

    // odd (3) elements 
    assert.deepEqual(middle([1,2,3]), [2]);
    // odd (5) elements
    assert.deepEqual(middle([1,2,3,4,5]), [3]);

  
  });

  it("testing even elements size array, should return two middle values", () => {

  // even (4) elements
    assert.deepEqual(middle([28,1,3,45]), [1,3]); // expected Assertion Passed for all cases
  // even (10) elements
    assert.deepEqual(middle([18,12,4,5,6,7,7,9,10,23]), [6,7]); // expected Assertion Passed for all cases   
  
  // even (4) elements
  assert.deepEqual(middle([1,2,3,4]), [2,3]);
  
  // even (6) elements
  assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);

  });



  it("Should return an empty array, when input is an empty array, array with single or two elements only", () => {   
    // empty array
    assert.deepEqual(middle([]), []); // expected Assertion Passed for all cases
    // array with 1 element only
    assert.deepEqual(middle([1]), []); // expected Assertion Passed for all cases
    // array with 2 elements only
    assert.deepEqual(middle([1,2]), []); // expected Assertion Passed for all cases
   
 
 
  });
 
});























