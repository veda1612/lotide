const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {

    if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
      //console.log(`Arrays are equal!`)
    } else {
      //console.log(`Arrays are NOT equal!`)
    }
  
}
  
  
//test cases
//assertArraysEqual(["hey", "hi", "hello"], ["hey", "hi", "hello"]);
//assertArraysEqual(["hey", "hi", "bye"], ["hey", "hi", "hello"]);
//assertEqual(assertArraysEqual(["hey", "hi", "hello"], ["hey", "hi", "hello"]), true); // => should PASS

module.exports = assertArraysEqual; 

  

