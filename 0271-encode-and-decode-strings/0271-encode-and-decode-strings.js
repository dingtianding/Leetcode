/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

// Input: dummy_input = ["Hello#","World"]
// "#5Hello#5World"
// Hello + #(indicate end/beg of a string) + 5(length of a string)
// 
// time n
// space of n res return res
//
//
var encode = function(strs) {//["Hello","World"]
    let res = ""
    for (let s of strs) {
        len = s.length //10
        res += len
        res += "#"
        res += s
    }
    return res
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {//5#Hello"5#World"
    //0#2#vn
    let res = [] 
    let i = 0;
    
    while(i < s.length){
        let j = i;
        while(s[j] !== "#"){
            j++;
        }
        let length = parseInt(s.substring(i,j))
        i = j + 1
        j = i + length
        string = s.substring(i, j)
        res.push(string)
        i = j
    }
    
    return res
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */