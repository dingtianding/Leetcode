/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function getHours(piles, eatingSpeed) {
  let sum = 0;

  for (let i = 0; i < piles.length; i++) {
    sum += Math.ceil(piles[i] / eatingSpeed);
  }

  return sum;
}

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let l = 1;
  let r = Math.max(...piles);
  let middle;
  let k;

  while (l <= r) {
    middle = Math.ceil((r - l) / 2) + l;

    k = getHours(piles, middle);

    if (k > h) {
      l = middle + 1;
    } else if (k <= h) {
      r = middle - 1;
    }
  }

  return l;
};
//Input: piles = [3,6,7,11], h = 8
//              1,2,2,3   = 8
//Output: 4(speed)
//
//Input: piles = [30,11,23,4,20], h = 5
//                1. 1. 1 1 1   = 5 hr
// Output: 30
// Input: piles = [30,11,23,4,20], h = 6
//                 2 , 1 ,1,1,1.   = 6
// Output: 23
//
// h = hour can only be equal or greater number of pile
//
// 1. highest(30)mid speed(15), and move up or down
//.  1a. (23) 
//   1b. 15-23 (19) 19-23, 21, 22, 23
//.  2b. 
// 2. if statement on if the speed is fast enough to finish all of the pile
// 3. time = speed > pile, move onto the pile increase time by one
// 4. pile > speed, don't move, increase the time by one, try again
// 5. time vs h, time < h, it is a good speed,
// 6. perform bsearch by moving the left up
// time of log N(speed) * M(piles)
// space of 1  
var minEatingSpeed = function(piles, h) {
    let r = -Infinity
    let l = 1
    for(let pile of piles){
        if (pile > r) r = pile // max speed
    }
    let mid = 0
    while(l < r){ // 4 , 4
        mid = Math.floor((l/2)+(r/2)) // 4

        if (canEat(piles, h , mid)){ // speed
            r = mid // 4
        } else {
            l = mid + 1 // 4
        }     
    }
    mid = Math.floor((l/2)+(r/2)) // 4
    
    return mid
};

var canEat = function(piles, h, s) { // speed of 4
    total = 0
    for(let pile of piles){
        time = Math.ceil(pile / s) // 6 / 4 = 1.5 = 2
        total += time // 8
    }
    return total <= h // 8 = 8

};