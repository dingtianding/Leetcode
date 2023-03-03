/**
 * @param {string} rings
 * @return {number}
 */

// n = count of ring 1-100
// ring can be RGB colored
// rod = 10 (0 to 9)
// string = 2N 
// String contain 1) color 2) which rod to be placed
// hash?
// hash[0] = [r, g, b] => (r) set.size = 3 ?? how to set
// 1. built the hash while iterating string 
// 2. iterate through the ring position within the hash and check if set.size = 3
// 3. let counter++ if I have set.size
// 4. return counter
// time of N + 10 + 1 = N
// space of N + N = 2N = N
//
var countPoints = function(rings) {
    let counter = 0 
    let hash = {}
    
    for(let i = 0; i < rings.length; i++){
        let char1 = rings[i]//color
        if(char1==="R"||char1==="G"||char1==="B"){
            let char2 = rings[i+1]//position
            hash[char2] ? hash[char2].add(char1) : hash[char2] = new Set(char1)
        }
    }
    
    for(let j = 0; j < 10; j++){ // 10
        if(!hash[j]) continue
        if(hash[j].size === 3) counter++
    }
    
    return counter
};