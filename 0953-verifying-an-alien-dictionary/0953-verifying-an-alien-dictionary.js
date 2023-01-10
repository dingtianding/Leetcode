/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
// 1. get index position for two words
// 2. compare to letter at the two position
// 3. if they are same, move onto next letter
// 3b. if they are not the same, but correct, we move on to the next word
// 3bb. 2nd vs 3rd
// 3c. if they are not the same, but incorrect, exit, return false
// 4. if we iterate through all the word, we want return true
// ??syntax how to properly access the order/dictionary? and I want build and use it in my if statements
// edge
// Time (N * M) = # of word as 
// Space (1) or N
var isAlienSorted = function(words, order) {
    for(let i = 0; i < words.length - 1; i++){
        let word = words[i] // 0 index
        let word2 = words[i+1]  // 1 index
        
        for(let j = 0; j < words[i].length; j++){
            let char = word[j] // h 
            let char2 = word2[j]// l
            if (!char) { // 
                break
            } else if (!char2) { // 1 should be more front/less word thne
                return false
            }
            let index = order.indexOf(char) // 4
            let index2 = order.indexOf(char2)// 3

            if(char === char2){ // app == app
                continue
            } else if (index < index2){
                break
            } else {
                return false
            }
        }
    }
    return true
};

// word = "app"
// char = word[4]
// console.log(char)

//beasts.indexOf('t')

