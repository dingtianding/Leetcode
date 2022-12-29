/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     if(n <= 1) return n;
    
//     return fib(n-1) + fib(n-2);
// };

const fib = function (n) {
  const rootOfFive = Math.sqrt(5);
  const fibn = ((1 + rootOfFive) / 2) ** n - ((1 - rootOfFive) / 2) ** n;
  return fibn / rootOfFive;
};