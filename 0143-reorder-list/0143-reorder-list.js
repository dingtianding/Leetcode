/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head) return
    
    let slow = head
    let fast = head
    
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    let prev = null
    let curr = slow.next
    let temp = null

    while (curr) {     
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    slow.next = null

    let first = head
    let second = prev
    while (second){
        temp = first.next
        first.next = second;
        first = temp;
        
        temp = second.next;
        second.next = first;
        second = temp;
    }
};