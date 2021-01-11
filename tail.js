// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

function tail(l) {
    return l.slice(1);
 }

 //console.log( tail(['a', 'b', 'c']) );

 //test cases
//assertEqual(tail([5,6,7]), 5);
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = tail;