/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = Array(n + 1).fill(0);
    
    let offset = 1
    
    for (let i = 1; i < result.length; i++) {
            if(offset * 2 === i) {
                offset = i;
            }
            
            result[i] = 1 + result[i - offset];
        }
    return result
};

// 0 = 0
// 1 = 01
// 1 = 10
// 2 = 11
// 1 = 100
// 2 = 101