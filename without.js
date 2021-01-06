//copied eqArrays function
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

//copied the assertEqual function here
const assertArraysEqual = function(arr1, arr2) {

    if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
      console.log(`Arrays are equal!`);
    } else {
      console.log(`Arrays are NOT equal!`);
    }
  
};
//without function starts here
const without = function(source, itemsToRemove) {

    let returnArray = [];
    
    for (let i = 0; i < source.length; i ++) {
      let removeElem = false;
      for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] === itemsToRemove[j]) {
          removeElem = true;
        }
      }
      if (removeElem === false) {
        returnArray.push(source[i]);
      }
    }
  
    return returnArray;
  
};
//test cases
//console.log(without([1, 2, 3], [1,2]))
console.log(without(["1", "2", 3], ["1"]))

module.exports = without;


  

  
