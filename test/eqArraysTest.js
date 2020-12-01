
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Cases:

assertEqual(eqArrays([1,2,3],[1,2,3]),true);

assertEqual(eqArrays([1,4,6], [1,4]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);
