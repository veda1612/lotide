const letterPositions = function(inputstring){
    const results = {}
    for (let i = 0; i < inputstring.length; i++) {
        if(inputstring[i] !== " "){//to avoid spaces of the string
            if (results[inputstring[i]]) {
                results[inputstring[i]]. push(i);
            } else {
                results[inputstring[i]] = [i];
            }
        }
    }
    return results;

}

//test case
const firstNames = "Karrl";
  
const result1 = letterPositions (firstNames);
console.log(result1);


module.exports = letterPositions ;