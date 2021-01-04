const assertEqual = function(actual, expected) {
    console.log(`${actual},${expected}`);

};

function tail(l) {
    return l.slice(1);
 }

 console.log( tail(['a', 'b', 'c']) );

assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");