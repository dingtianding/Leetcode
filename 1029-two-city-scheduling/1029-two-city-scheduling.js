/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    
    let sorted = costs.sort(( a , b ) => (a[0] - a[1]) - (b[0] - b[1]) );
    let cost = 0;
    let halfway = sorted.length/2;
    
    for(let i = 0; i < halfway; i++) {
        let cityA = sorted[i][0]   // best gain to city A
        let cityB = sorted[halfway + i][1] // to city B
        cost += cityA + cityB
        console.log(cost)
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