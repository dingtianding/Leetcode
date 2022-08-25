/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    const count = new Array(101).fill(0); // first place is reserved for max
    
    for (const [birth, death] of logs) {
        count[birth - 1950] ++; // incre for place in array relative to 1950
        count[death - 1950] --;
     }
    
    let max = 0
    
    for (let i = 1; i < 101; i++) {
        count[i] += count[i - 1]; // map out the year ppl are alive or dead by +-1
        
        if (count[i] > count[max]) max = i; //up max if 
    }
    
    return 1950 + max;
    
};