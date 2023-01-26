/**
 * @param {string[]} strs
 * @return {string}
 */
// what is prefix? 
// substring, prefix: always starts from.
// flower
// flow
// fl
// result = strs[0]
// 
// dog
// ""
// ""
// ["flow","flower","flight"]
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ""
    
    let result = strs[0] // "ab"
    
    for(let i = 1; i < strs.length; i++){//iterate word, "a"
        let str = strs[i] // "a"
        if (!str) return ""
        
        for(let j = 0; j < result.length; j++){// iterate letter
            let char = str[j] //
            let char2 = result[j] // b of ab
            
            if(char !== char2){ // at index of 2
                result = result.slice(0, j)// flower -> flow -> fk
                break
            }
        }
    }
    return result
};


