
//const head = require('../head');
//const assertEqual = require('../assertEqual');

const assert = require('chai').assert;

const head = require('../head');


describe("#head", () => {

  it("returns 5 for [5,6,7]", () =>{

    assert.strictEqual(head([5,6,7]),5);

  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns hello for [Hello,Lighthouse,Labs]", () => {

    assert.strictEqual(head(["Hello","Lighthouse","Labs"]), "Hello");

  });
  it("returns undefined for an empty array case", () => {

    assert.strictEqual(head([]), undefined);

  });
  it("returns undefined for an array with only a single element", () => {

    assert.strictEqual(head([1]), 1);

  });





});


