/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// s1 is gon the smaller one
// s2 is longer one
// permutation is rearrangement of the letters
// find permutation
// window max size = s1.length
// p1 = 0
// p2 = s1.length - 1'
// hash[a] = count
// s1 hash[a] = 1, hash[b]=1
// s2's window, check has have that key, if so I reduce the count.
// time O
//
var checkInclusion = function(s1, s2) {
    let windowSize = s1.length - 1 // 1

    for(let j = 0; j < s2.length - windowSize; j++){
        let hash = {}
    
        for(let i = 0; i < s1.length; i++){
            let char = s1[i]
            hash[char] ? hash[char] += 1 : hash[char] = 1// hash[a]=1,hash[b]=1
        }//build
        
        let p1 = j, p2 = j + windowSize
        
        for(let i2 = p1; i2 <= p2;i2++){
            let char = s2[i2]
            if(hash[char]) hash[char] -= 1 
        }
        console.log(hash)
        let match = true
        for(let i3 = 0; i3 < s1.length; i3++){
            let char = s1[i3]
            if(hash[char]!=0) match = false
        }
        if(match) return true
    }
    return false
};