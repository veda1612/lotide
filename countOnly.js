// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount){
    const results = {}
    for (const item of allItems) {
       
        //console.log(item);
        if (itemsToCount[item]) { 
            if (results[item]) {
              results[item] += 1;
            } else {
              results[item] = 1;
            }
        }
    }
    return results;

}

//tet case
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
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
console.log(result1["Jason"]);
console.log(result1["Fang"]);


module.exports = countOnly;