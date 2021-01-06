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
  
}
const assertArraysEqual = function(arr1, arr2) {

    if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
      console.log(`Arrays are equal!`)
    } else {
      console.log(`Arrays are NOT equal!`)
    }
  
}
  
  
  //test cases
//assertArraysEqual(["hey", "hi", "hello"], ["hey", "hi", "hello"]);
assertArraysEqual(["hey", "hi", "bye"], ["hey", "hi", "hello"]);

  

