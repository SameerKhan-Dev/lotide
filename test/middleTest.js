
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('../eqArrays');


// TEST CASES //

///////TEST CASES -- All should have Assertion passed if our middle function is functioning correctly.////////

// odd (7) elements
assertArraysEqual(middle([0,1,2,3,4,5,6]), [3]); // expected Assertion Passed for all cases
// odd (7) elements
assertArraysEqual(middle([19,1,5,22,1,3,5]), [22]); // expected Assertion Passed for all cases
// odd (9) elements
assertArraysEqual(middle([23,1,5,73,1,5,5]), [73]); // expected Assertion Passed for all cases
// even (4) elements
assertArraysEqual(middle([28,1,3,45]), [1,3]); // expected Assertion Passed for all cases
// even (10) elements
assertArraysEqual(middle([18,12,4,5,6,7,7,9,10,23]), [6,7]); // expected Assertion Passed for all cases
// empty array
assertArraysEqual(middle([]), []); // expected Assertion Passed for all cases
// array with 1 element only
assertArraysEqual(middle([19]), []); // expected Assertion Passed for all cases
// array with 2 elements only
assertArraysEqual(middle([1,5]), []); // expected Assertion Passed for all cases

// some other test cases:
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);

assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);

assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);