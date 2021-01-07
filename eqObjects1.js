const eqArrays = require("./eqArrays");

// to compare two objects
const eqObjects1 = function(object1, object2) {
    let result = true;
  
//if the two objects are not the same length the assertion fails automatically
    let array1 = Object.keys(object1);
    let array2 = Object.keys(object2);

    if (array1.length !== array2.length) {
      result = false;
    } 
  
//if the two objects are the same length this runs:
else for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    result = result && (eqArrays(object1[key], object2[key]));
    } else if (typeof(object1[key]) === "object" || typeof(object2[key]) === "object") {
      result = result && eqObjects1(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) result = result && false;
  }
  return result;

};

//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects1(ab, ba)); //true
console.log(eqObjects1(ab, abc)); //false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects1(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects1(cd, cd2)); // => false

module.exports = eqObjects1;