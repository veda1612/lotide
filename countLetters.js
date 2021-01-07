const countLetters = function(allItems){
    const results = {}
    for (const item of allItems) {
        if(item !== " "){
            if (results[item]) {
                results[item] += 1;
            } else {
                results[item] = 1;
            }
        }
    }
    return results;

}

//test case
const firstNames = "Karrl";
  
const result1 = countLetters(firstNames);
console.log(result1);


module.exports = countLetters;