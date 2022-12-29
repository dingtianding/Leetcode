/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
//     let parentVal = root.val, pVal = p.val, qVal =q.val
    
//     if(pVal > parentVal && qVal > parentVal){
//         return lowestCommonAncestor(root.right, p, q);
//     } else if(pVal < parentVal && qVal < parentVal){
//         return lowestCommonAncestor(root.left, p, q);
//     } else {
//         return root;
//     }
// };
var lowestCommonAncestor = function(root, p, q) {
    let pVal = p.val, qVal =q.val, node = root
    
    while(node!= null){
        let parentVal = node.val;
        
        if (pVal > parentVal && qVal > parentVal){
            node = node.right;
        } else if (pVal < parentVal && qVal < parentVal){
            node = node.left;
        } else {
            return node;
        }
    }
    return null
};