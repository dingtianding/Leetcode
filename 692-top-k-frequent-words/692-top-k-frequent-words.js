/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    
    hash = {};
    
    for (let word of words) {
        hash[word] = hash[word] + 1 || 1;
    }
    
    let sorted = Object.keys(hash).sort((a,b)=>{
        let countCompare = hash[b] - hash[a];
        if (countCompare == 0) return a.localeCompare(b);
        else return countCompare;
    });
    
    return sorted.slice(0, k)
};