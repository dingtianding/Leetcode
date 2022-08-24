/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return head;
    
    let current = head;
    
    if(current.child){
        let tail = findTail(current.child); //go to the end of next that child node(get the tail of the next child tier)
        let tempNext = current.next; // set the next in the current tier to a var
        
        current.next = current.child //point currnet next toward the child node
        current.child.prev = current; // point the child node back at the current node
        
        if(tempNext) tempNext.prev = tail; // point the next in the currnet tier to the end of the child nodes
        
        tail.next = tempNext //point the child nodes's next toward the current tier's next
        
        current.child = null; //clear the child pointer
        
    }
    
    flatten(current.next) // recurse onto next one.
    
    return head; 
};

function findTail(node){
    
    while(node.next){
        node = node.next; 
    }
    return node;
}
    









// var flatten = function(head) {
//     if (!head) return head
    
//     let dummyHead = new Node(0, null, head, null); // set up a dummyhead in front of input
    
//     let stack = [head]; // create a stack with LL in it
//     let current = dummyHead; // set a current variable
//     let prev = null; // set a prev variable
    
//     while(stack.length != 0) { 
        
//         current = stack.pop(); // 
        
//         if(prev) { 
//             current.prev = prev
//             prev.next = current; 
//         }
        
//         if(current.next != null) stack.push(current.next); //
        
//         if(current.child != null) {
//             stack.push(current.child); //push child node if there is
//             current.child = null;//remove
//         }
//         prev = current; // set the
//     }
//     return dummyHead.next
    
// };

