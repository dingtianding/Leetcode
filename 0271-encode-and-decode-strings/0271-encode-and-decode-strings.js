/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let res = "";
    
    for (let s of strs) {
        res += s.length + "#" + s;
    }
    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(str) {
    
    let res = [];
    
    let i = 0;
    
    while(i < str.length){
        let j = i;
        while (str[j] !== '#') {
            j++;
        }
        let length = parseInt(str.substring(i, j));
        
        i = j + 1;
        j = i + length;
        res.push(str.substring(i, j));
        i = j        
    }
    
    return res
    
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */