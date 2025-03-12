/**
 * @param {number[]} prices
 * @return {number}
 */

//  [7,1,5,3,6,4]
//  1. idenitify buy in point for  low price 
//  low price(ideally the lowest) + need higher price to sell following it.
// have looking ahead using index. If there is a higher price later on, we can buy in
// iterate until find a number with next number being higher. then already add the profit onto our sales.
//  2. identify multiple selling points 
//  3. identiy best selling point
//  4. each sale we add onto our total profit
//  N
//  1
var maxProfit = function(prices) {
    let profit = 0 

    for(let i = 0; i < prices.length-1; i++){
        let current = prices[i]
        let next = prices[i + 1]
        if(next > current){
            let curProfit = next - current
            profit += curProfit
        }
    }

    return profit

    
};