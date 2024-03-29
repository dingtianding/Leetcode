/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 2 pointer - fast and slow
// if two are moving at speed of 1 and 2 within cycle, they should meet eventually based on how long the cycle.
// 1. set up 2 pointer
// 2. move fast two step per turn
// 3. move slow one step per turn
// 4. comparing their value of the node until the are equal, return turn as there is cycle
// 5. if it hits null/or the end of the LL, they return false
// time N + M = N 
// space 2 = 1
var hasCycle = function(head) {    
    if(!head) return false
    let slow = head
    let fast = head
    while(fast){
        fast= fast.next?.next
        slow= slow.next
        if(slow===fast) return true
    }
    return false
};
