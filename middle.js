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
//copied the asserArraysEqaul function  
const assertArraysEqual = function(arr1, arr2) {

    if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
      console.log(`Arrays are equal!`);
    } else {
      console.log(`Arrays are NOT equal!`);
    }
  
};

const middle = function(array) {
    let midarr = [];
    if (array.length <= 2){
        return [];
    } else if((array.length) % 2 === 0) {
        let num = (Math.floor(array.length / 2));
        midarr.push(array[num - 1])+ midarr.push(array[num]);
        return midarr;
    } else {
        num = (Math.floor(array.length / 2));
        midarr.push(array[num ]);
        return midarr;
    }

};
//console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5,6]));

module.exports = middle;