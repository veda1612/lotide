const middle = require('../middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

//test cases
//console.log(middle([1,2,3]));
//console.log(middle([1,2,3,4,5,6]));
//assertArraysEqual(middle([1,2,3], [2]));
//assertArraysEqual(middle([1,2,3,4,5,6], [3,4]));

describe("#middle", () => {
    it("returns '2' for ['2']", () => {
      assert.deepEqual(middle(['2']), '2'); 
    });
  });