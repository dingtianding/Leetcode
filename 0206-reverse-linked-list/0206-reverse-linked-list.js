/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 3 pointer varibale
// current, start at head,node 1, 2
// prev, start at null, 1
// next, null 2, 3
// while current != null
// 
// be mindful as to if I am return the head of the linked list(previous node of the null node at the end)
var reverseList = function(head) {
    let current = head
    let next = null //
    let prev = null //
    
    while(current != null){ // 1, 2,3,4,5, null
        next = current.next //setting node of 2 aside on a next m,    next= null
        current.next = prev //having current's pointer to the prev 1 -> null, chaning 2's pointer to the prev variable(1)
        prev = current //updating the prev variable to to be the current node prev = 5
        current = next// we are moving current onto next current = 5->null
    }
    return prev
};

