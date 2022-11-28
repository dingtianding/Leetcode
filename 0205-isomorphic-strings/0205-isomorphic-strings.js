/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hash = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if(!hash.has(s[i])) hash.set(s[i],t[i])
        else {
            if(hash.get(s[i]) != t[i]) {
                return false
            }
        }
    }
    return new Set([...hash.values()]).size == hash.size
    
    
};