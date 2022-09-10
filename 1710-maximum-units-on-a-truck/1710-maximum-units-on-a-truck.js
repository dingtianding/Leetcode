/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1])
    
    let output = 0
    
    for (let i = 0; truckSize && i < boxTypes.length; i++) {
        let boxCount = Math.min(boxTypes[i][0], truckSize)
        let unitCount = boxTypes[i][1]
        
        output += boxCount * unitCount
        truckSize -= boxCount
    }
    
    return output
    
};