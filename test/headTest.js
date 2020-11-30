
const head = require('../head');
const assertEqual = require('../assertEqual');

// Writing Test Cases: // if both cases are true i.e assertion passed then the test case passed.

assertEqual(head([5,6,7]),5);

assertEqual(head(["Hello","Lighthouse","Labs"]), "Hello");

// empty array test case
assertEqual(head([]),undefined);
// array with single element test case
assertEqual(head([1]),1);

