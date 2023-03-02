/**
 * @param {string[]} tokens
 * @return {number}
 */

// an array string
// int result
// stack = last in first out
// push into stack until we an operation ( + - * /)
// operation pop until 2 numbers to use for that operation
// operation I have mindful of the order of num being popped
// + : get two number add it and push it back
// * : get two number multiple and push it back 
// / : second num popped / first num popped and push it back rounding down (floor)
// - : second num popped - first num popped and push it back
// 
// when we empty stakc return the result

// T of N 
// S of N(stack)
// 
var evalRPN = function(tokens) {
    let stack = []
    
    for (let token of tokens){
        console.log(stack)
        if(token==="+"){//+
            let num1= stack.pop()
            let num2= stack.pop()
            let sum = num1 + num2
            stack.push(sum)
        } else if(token==="-"){
            let num1= stack.pop()
            let num2= stack.pop()
            let dif = num2 - num1
            stack.push(dif)
        } else if(token==="*"){
            let num1= stack.pop()
            let num2= stack.pop()
            let pro = num2 * num1
            stack.push(pro)
        } else if(token==="/"){
            let num1= stack.pop()
            let num2= stack.pop()
            let div = Math.trunc(num2 / num1)
            stack.push(div)
        } else {
            let int = Number(token)
            stack.push(int)
        }
    }
    return stack[0]
};

// []
// [ 10 ]
// [ 10, 6 ]
// [ 10, 6, 9 ]
// [ 10, 6, 9, 3 ] +
// [ 10, 6, 12 ]
// [ 10, 6, 12, -11 ] *
// [ 10, 6, -132 ]
// [ 10, -1 ]
// [ -10 ]
// [ -10, 17 ]
// [ 7 ]
// [ 7, 5 ]