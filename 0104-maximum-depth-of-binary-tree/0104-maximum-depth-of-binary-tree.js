/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//  1. set a max variable
//  2. dfs recursion we pass in a local counter
//  3. if statement over depth vs max, and update if needed
//  4. return max a the end
var maxDepth = function(root, depth = 1, max = 0) {
    if(!root) return max
    if(depth > max) max = depth
        
    let left = maxDepth(root.left, depth + 1, max) // (9, 2, 1)
    let right = maxDepth(root.right, depth + 1, max) // (7, 3, 3)
    
    return Math.max(left, right)
    
};