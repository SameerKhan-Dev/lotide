
const assertArraysEqual = require('../assertArraysEqual');



//Test Cases: (All passed!)

assertArraysEqual([1,2,3], [1,2,3]); // expected Assertion passed.

assertArraysEqual([1,4,6],[3,5,7]); // expected Assertion failed.

assertArraysEqual([1,3,"4"],[1,3,4]); // expected Assertion failed.

assertArraysEqual([1,2],[1,2,3]); // expected Assertion failed.
