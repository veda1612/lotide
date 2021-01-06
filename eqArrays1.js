//copied assertEqual function
const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    } else {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
  };
//eqArrays function
const eqArrays = function(array1, array2) {
    let correct = true;
  
//if the two arrays are not the same length the assertion fails automatically
    if (array1.length !== array2.length) {
      correct = false;
    } 
  
//if the two arrays are the same length this runs:
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        correct = false;
      }
    }
  
    return correct;
  
};
  
  //test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
  
module.exports = eqArrays;
