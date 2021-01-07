const countElements = function(allItems){
    const results = {}
    for (const item of allItems) {
        if (results[item]) {
            results[item] += 1;
        } else {
            results[item] = 1;
        }
    }
    return results;

}

//test case
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
const result1 = countElements(firstNames);
console.log(result1);


module.exports = countElements;