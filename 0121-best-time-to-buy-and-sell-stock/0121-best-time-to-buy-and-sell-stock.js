/**
 * @param {number[]} prices
 * @return {number}
 */

// input: array of stock price, 
// day factor: price can be eariler or later
// profit = sell day/price - buy day/price 
// postive or return profit 
//
// 1. set maxprofit update if higher exist , = 0
// 2. set bestcost update if better cost, = prices[0]
// 3. iterate through price history and recalc cur profit starting from second
// 4. max profit
// 
// time of N
// space of 2, 1
var maxProfit = function(prices) {
    let maxP = 0
    let minC = prices[0] // 7
    
    for(let i = 1; i < prices.length; i++){
        let current = prices[i] // 6
        let profit = current - minC // 6 - 1 = 5
                
        minC = Math.min(minC, current) // cost = 7,6,4,3,1
        maxP = Math.max(maxP, profit) // 0 > negative
    }
    
    return maxP // 0
};