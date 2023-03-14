/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

// distance = 12
// posi of 5 car = [10,8,0,5,3] = [0,3,5,8,10]
// speed of 5 car= [2,4,1,1,3] =  [1,3,1,4,2]
// current_pos   =.  after a hour=[1,6,6,12,12] = 
// return fleetcount             =[1,1,1,,122]
// current_position array  = position every hour
//                  [1,1,2,3,3] = 3 fleet
// sort distance by starting position
// fleet initialize = number of car
// reduce that fleet count each time they join fleet(return current_position.length)
// 
// while loop, each it loop the time goes by one hour 
// Position + speed = new position
// if the new position is => new position previous, I reduce the fleet count by one

var carFleet = function(target, position, speed) {
    if(position.length===1) return 1
    let fleet = 0
    let combined = []
    for(let i = 0; i < position.length; i++){
        combined[i] = [position[i],speed[i]]
    }
    let sorted = combined.sort(function(a, b){return a[0] - b[0]});
    // [ [ 0, 1 ], [ 3, 3 ], [ 5, 1 ], [ 8, 4 ], [ 10, 2 ] ]
    //    12hr(1)    3hr(2)    7hr(2)    1hr(3)    1hr(3)
    //      5    >    5.   <   4.    >   4    =     3
    //         decrease fleet if = or <(less time than next aka faster)
    // target = 10
    //[0,2,4]
    //[2,3,1]
    // 5,3,6
    let stack = []
    for(let i = sorted.length - 1; i >= 0; i--){
        let pos = sorted[i][0]
        let spd = sorted[i][1]
        let dis = target - pos
        let time = dis / spd
        stack.push(time)
        if(stack[stack.length-1] <= stack[stack.length-2] && stack.length >= 2) {
            stack.pop()
        }
    }   
    return stack.length
};








