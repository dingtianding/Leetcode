/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0
    let counting = false
    
    for(let i = s.length - 1; i >= 0; i--){
        let char = s[i]

        if(char === " " && !counting){
        } else if (char === " "&& counting){
            return count
        } else {
            count++
            counting = true
        }
    }
    return count
};

// #         1. Split strng into array with the ""
// #         2. take last indax position
// #         3. iterate that word with a counter to count
// #         4. return that counter

// #         1. iterate from back
// #         2.start counting when there a non-space
// #         3. after counting stop when there is a space
// #.        4. return count.