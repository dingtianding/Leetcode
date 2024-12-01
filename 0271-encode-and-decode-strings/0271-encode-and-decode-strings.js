/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    if (strs.length === 0 ) return "";
    
    let sizes = [], res =""
    
    for (let s of strs) {
        sizes.push(s.length);
    }
    for (let sz of sizes){
        res += sz + ',';
    }
    res += '#'
    for (let s of strs) {
        res += s;
    }
    console.log(res)
    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(str) {
    if (str.length === 0) return []
    
    let sizes = [], res = [], i = 0;
    
    while(str[i] !== '#') {
        let cur = "";
        while(str[i]!== ','){
            cur += str[i];
            i++
        }
        sizes.push(parseInt(cur));
        i++;
    }
    i++;
    for(let sz of sizes){
        res.push(str.substr(i, sz));
        i+=sz;
    }
    return res
    
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */