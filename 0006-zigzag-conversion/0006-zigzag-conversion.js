/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// input a PAYRALISHIRING
// input int that how many rows we have
// out new string PAHNAPLSIIGYIR
//
//  1. create a 2d array with int amount of row. Column = s.length. Rest can be zero
//  2. interate thorugh S
//  3. for each of the char, we want to set it in the 2d array in a pattern.
//  4. two momvent: downward and upward
//. 4a. downward is where we increase the outer index/x til we reach int row
//  4b. upward is where decrease outerindex/x and increase inner of y til we reach outer index of 0, we want go back 4a.
//  5. iterate through 2array, build them into a new string, and we ignore any 0/null

// var convert = function(s, numRows) {
//     if(numRows === 1) return s;
//     let array = Array(numRows).fill().map(() => Array(s.length).fill(""));
//     let newString = ""
//     let x = 0
//     let y = 0
    
//     for(let i = 0; i < s.length; i++){
//         let char = s[i]
//         let cycle = (numRows - 1) * 2 // 4 = index difference for same pos of a cyle
//         let halfcycle = cycle / 2 // 2 = their y's difference
//         array[x][y] = char
        
//         if(y % halfcycle === 0 && x < numRows - 1){ // y = 0, 2, 4, 6
//             x++
//         } else {
//             x--
//             y++
//         }
//     }
//     console.log(array)
//     for(let i = 0; i < numRows; i++){ 
//         for(let j = 0; j < s.length;j++){
//             let char2 = array[i][j]
//             if(char2 !==""){
//                 newString += char2
//             }
//         }
//     }
//     return newString
// };
// //.                   index
// // 0    6      12   = 0, (row-1) * 2, 2 * (row-1)* 2
// // 1  5 7   11 13   = 1, (row-1) * 2 - 1, 1 + (row-1) * 2, 
// // 2 4  8 10        = 2, (row-1) * 2 - 1,  1 + (row-1) * 2
// // 3    9           = 3, 3 + (row-1) * 2

var convert = function(s, numRows) {
    if(numRows == 1 || 1 == s.length)return s
    let i = 0;
    let a = true;
    let ans = []
    while(i < s.length) {
        if(a) {
          let k = i+numRows;
          let sub = s.slice(i,k)
          i=k;
          ans.push(sub)
          a=false;
        } else {
            let k = i+numRows-2;
            let sub = s.slice(i,k).padEnd(numRows-2).split("").reverse().join("")
            i=k;
            ans.push(sub)
            a=true;
        }
    }
    if(numRows == 2){
        let str = ""
        for(let i = 0;i<=1;++i){
            for(let k of ans.filter(x=>x!="")) {
                if(k[i])str+=k[i]
            }
        }
        return str
    }
    let str = ""
    for(let i = 0;i<numRows;++i){
        for(let j=0;j<ans.length;++j){
            if(j%2 == 0){
             if(ans[j][i]) {
                str+=ans[j][i]
              }
             } else if(j%2 == 1 && i>0 && i <= numRows-2) {
             let c = ans[j][0]
             ans[j]=ans[j].slice(1)
             if(c!=" ")str+=c
            }
        }
    }
    return str
};