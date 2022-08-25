/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    
    if(arr.length === 0 ) return arr
    
    let rankings = [];
    let hash = {};
    
    let sorted = arr.slice().sort((a,b) => a - b);
    
    let rank = 1
    
    for (let i = 0; i < sorted.length; i++){
        if(!hash[sorted[i]]) {
            hash[sorted[i]] = rank
            rank ++;
        }
    }
    
    
    for (let i = 0; i < arr.length; i++) {
        let ranking = hash[arr[i]];
        rankings.push(ranking)
    }
    
    return rankings
    
};