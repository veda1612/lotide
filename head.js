// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

function head(p) {
    for (let i in p) return p[i];
  }
  
  //console.log( head(['a', 'b', 'c']) );
  

//test cases
//assertEqual(head([5,6,7]), 6);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;

