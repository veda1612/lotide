//importing eqObjects
const eqObjects = require("./eqObjects");


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    //const inspect = require('util').inspect; 
    if (!eqObjects(actual, expected)){
        //return (console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
        return (console.log(`❌❌❌ Assertion Failed: `));
    }
    //return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
    return (console.log(`✅✅✅ Assertion Passed: `));
};

//test cases
console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));

module.exports = assertObjectsEqual;