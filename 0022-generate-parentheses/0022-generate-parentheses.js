/**
 * @param {number} n
 * @return {string[]}
 */

// there equal # of left and right parentheses
// stacks
// "(" have to be before ")"
// 
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Output: ["(())","()()"] n =2 
// Output: ["()"]
// total length of each 2n
// defination well formed

var generateParenthesis = function(n) {
    const result = [] //
    let stack = [] // ["(","(",")"]=length
    
    var generate = function(left = 0, right = 0){//recursion // n =2
        if(stack.length === 2 * n){ //right + left = 2n
            let combo = stack.join("")  //"(())"
            result.push(combo) //["(())"]
        }
        
        if(left < n){ // stack =[] left = 2 = n
            stack.push("(") //stack ["("]
            generate(left + 1,right) // ["(","(",")",")"]
            stack.pop()
        }
        
        if(left > 0 && right < left ){ //  ["(","(",")",")"] left = 2 right = 2
            stack.push(")") 
            generate(left,right + 1) 
            stack.pop()
        }
    };  
    generate(0, 0) // n

    return result
};

