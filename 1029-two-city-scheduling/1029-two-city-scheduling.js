/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    
    let sorted = costs.sort(( a , b ) => (a[0] - a[1]) - (b[0] - b[1]) );
    let cost = 0;

    for(let i = 0; i < sorted.length/2; i++) {
        let cityA = sorted[i][0]   // best gain to city A ( mini)
        let cityB = sorted[sorted.length - 1 - i][1] // best gain to city B (max)
        cost += cityA + cityB
        
    }
    return cost;
    
};


// costs= [[10, 20],    -10
//       [30, 200], -170
//       [400, 50], 350
//       [30, 20]], 10

// sorted=[30, 200], -170      30
//       [10, 20], -10         10
//       [30, 20], 10          20
//       [400, 50], 350        50
//                             110