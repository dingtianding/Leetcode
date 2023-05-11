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
 * @return {boolean}
 */
var isBalanced = function(root) {
    

    
    let dfs = function(node) {
        if(!node) return 0;
        
        let left = dfs(node.left);
        let right = dfs(node.right);
        
        if(Math.abs(left - right) > 1) return Infinity;
        
        return 1 + Math.max(left, right);
    }
    
    return dfs(root) == Infinity ? false: true;


};