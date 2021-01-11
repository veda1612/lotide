const middle = require('../middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

//test cases
//console.log(middle([1,2,3]));
//console.log(middle([1,2,3,4,5,6]));
assertArraysEqual(middle([1,2,3], [2]));
assertArraysEqual(middle([1,2,3,4,5,6], [3,4]));