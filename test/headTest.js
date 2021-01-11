
const head= require('../head');
const assertEqual = require('../assertEqual');
const assert = require('assert');

//test cases
//assertEqual(head([5,6,7]), 6);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

describe("#head", () => {
    it("returns '5' for ['5']", () => {
     assert.strictEqual(head(['5']), '5'); 
  });
});