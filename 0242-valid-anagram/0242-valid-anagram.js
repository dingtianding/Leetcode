/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hash = {}
    if (s.length !== t.length) return false

    for(let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] || 0) + 1;
    }
    for(let i = 0; i < t.length; i++) {
        if (!hash[t[i]]) return false;
        hash[t[i]]--;
        // console.log(hash)
    }
    return true
    
};