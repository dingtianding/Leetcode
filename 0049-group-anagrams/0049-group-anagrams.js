/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// create a helper that idefny if two string is anagram.
// iterate thorugh char put in a hash, check if two hash is equal to each other
// hash={ 
// }
// let result = []
//
//
// N * M * O = N length input * M length of output * number of char
// space = N
// while(strs.pop){
//      let word = bat
//          pass in a char of result vs whichever I jsust popped.
// }
//
//
var groupAnagrams = function(strs) {
    let m = new Map();
    for (let str of strs) {
        let sorted = str.split("").sort().join("");
        if (m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
        else m.set(sorted, [str]);
    }
    return Array.from(m.values());
};

