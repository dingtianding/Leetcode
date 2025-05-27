/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//  array already sorted 
// two pointer left and right
// add together to get sum
// if sum greater 
// move right --
// else move left ++
// if it equal we return index + 1(peasant's way of saying positions in the array cuz true gigagchad starts from 0)
// one solution when we find the two sums, we can just return and end it there
// pointer can't be on the indices.
// performance two N
// space of 1

var twoSum = function(numbers, target) {
    let l = 0
    let r = numbers.length - 1

    while(l < r){
        let num1 = numbers[l]
        let num2 = numbers[r]
        let sum = num1 + num2

        if(sum === target) return [l + 1, r + 1]

        if(sum > target){
            r--
        } else {
            l++
        }
    }
    return false
    
};