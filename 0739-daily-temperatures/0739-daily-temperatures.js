/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = []
    
    for(let i = 0; i < temperatures.length;i++){
        let temp = temperatures[i]
        while(stack.length && temp > temperatures[stack[stack.length - 1]]){
            let day = stack.pop()
            let diff = i - day
            result[day] = diff
        }
        stack.push(i)
    }
    
    return result
    
};