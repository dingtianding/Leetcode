/**
 * @param {number} x
 * @return {number}
 */

// iterate from 0 and up
// if less, keep iterate
// if equal, return current iteration
// if greater, retunr previous
// time N
// space 1
// 
var mySqrt = function(x) {
    for(let num = 0; num < Infinity;num++){
        if(num*num === x){
            return num
        }else if (num*num > x){
            return num - 1
        }
    }
};