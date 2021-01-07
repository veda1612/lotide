const findKeyByValue = function(object, value){
    keysArray = Object.keys(object);
    for(let item of keysArray){
        if ( object[item] === value){
            return item;
        }

    }
}

//test cases
const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};

  
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));