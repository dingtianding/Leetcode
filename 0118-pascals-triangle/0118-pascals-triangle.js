/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    //pattern
    //push in 1 at the end
    //recursion
    //base case
    const result = [[1]];
    while (result.length !== numRows){
        //take previous array
        const prev = result[result.length - 1].slice(0); //prev array [1, 2, 1]; 1 3 3
        for (let i = prev.length - 1; i > 0; i--){
            prev[i] = prev[i] + prev[i - 1]
        }

        prev.push(1);
        result.push(prev);
    }

    return result;
}