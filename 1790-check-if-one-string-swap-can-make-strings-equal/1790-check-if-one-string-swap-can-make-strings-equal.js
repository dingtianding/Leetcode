/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true
    
    let dif1="";
    let dif2="";
    
    for(let i=0;i<s1.length;i++)
        if(s1[i] !== s2[i]) {
            dif1 += s1[i];  
            dif2 += s2[i];
        }
    return dif1.length == 2 && dif2.length == 2 && dif1[0] == dif2[1] && dif1[1] == dif2[0]
};
