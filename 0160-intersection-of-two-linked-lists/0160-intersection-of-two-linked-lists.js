/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let a = headA, b = headB
    while ( a !== b) {
        a = (!a) ? headB : a.next // if a is null is sets it back to the head, if not it moves to the next avaliable value.
        b = (!b) ? headA : b.next
    }
    return a
};