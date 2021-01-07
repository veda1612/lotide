const eqArrays = require("./eqArrays");

// to compare two objects
const eqObjects = function(object1, object2) {
    let result = true;
  
//if the two objects are not the same length the assertion fails automatically
    let array1 = Object.keys(object1);
    let array2 = Object.keys(object2);

    if (array1.length !== array2.length) {
      result = false;
    } 
  
//if the two objects are the same length this runs:
else for (let item of array1) {
  if (Array.isArray(object1[item]) && Array.isArray(object2[item]))  {
    result = eqArrays(object1[item], object2[item]);    
  } else if (typeof(object1[item]) === "object" || typeof(object2[item]) === "object") {
    result = eqObjects(object1[item], object2[item]);
  } else if  (object1[item] !== object2[item]) {
    result = false;   
    
  }
}
  
  return result;
};

//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, ba)); //true
//console.log(eqObjects(ab, abc)); //false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;