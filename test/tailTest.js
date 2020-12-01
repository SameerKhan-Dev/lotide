
const assert = require('chai').assert;

const tail = require('../tail');


describe("#head", () => {

  it("Make sure when input is [hello, lighthouse, Labs] the resulting length is 2, and first element is lighthouse and second element is labs", () => {

    // assert.strictEqual(head([5,6,7]),5);

    const result = tail(["Hello", "Lighthouse", "Labs"]);

    assert.strictEqual(result.length, 2); // if true makes sure we get back two elements.
    console.log("Hello");
    assert.strictEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
    console.log("Bye");
    assert.strictEqual(result[1], "Labs"); // ensure second element is "Labs"

  });

  it("Make sure when input is [Yoyo, lighthouse, Labs] the original array has not changed", () => {

    // assert.strictEqual(head([5,6,7]),5);
    const words = ["Yoyo", "Lighthouse", "Labs"];

    const result = tail(words);

    assert.strictEqual(words.length, 3); // if passed, means original array has not been changed

  });


  // Testing Empty Array

  it("Make sure empty array input returns an empty array output", () => {   

    const originalArray = [];

    const result = tail(originalArray);

    assert.deepEqual(originalArray,result);
  
  });
  it("Make sure empty array input returns an empty array output", () => {   

    const originalArray = [];

    const result = tail(originalArray);

    assert.deepEqual(originalArray,result);
  
  });

// Testing Array with single element
const returnedArray2 = tail([]);
console.log(returnedArray2);
  it("Make sure an array with only a single element returns an empty array output", () => {   

    const originalArray = [1];

    const result = tail(originalArray);

    assert.deepEqual(result,[]);

  });

});

























/*



// running Test Cases

// Test Case 1: Check the Returned Array Elements





// Test Case 2: Check the Original Array







// Test Case 3: Write a test Case to make sure that the original array is not modified




/*



*/

