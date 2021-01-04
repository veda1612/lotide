// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    console.log(`${actual},${expected}`);

};
function head(p) {
    for (let i in p) return p[i];
  }
  
  console.log( head(['a', 'b', 'c']) );

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");