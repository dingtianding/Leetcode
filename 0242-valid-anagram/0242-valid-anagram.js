/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    }
    
    const count = new Array(26).fill(0);
    
    for(let i = 0; i < s.length; i++) {
        CurrentLetterSUnicode = s.charCodeAt(i)
        LetterAUnicode ='a'.charCodeAt(0)
        LocationCurLetter = CurrentLetterSUnicode - LetterAUnicode
        count[LocationCurLetter]++;
        
        CurrentLetterSUnicode = t.charCodeAt(i)
        LetterAUnicode ='a'.charCodeAt(0)
        LocationCurLetter = CurrentLetterSUnicode - LetterAUnicode
        count[LocationCurLetter]--;

    }
    
    
    return count.every(val => val === 0);
};