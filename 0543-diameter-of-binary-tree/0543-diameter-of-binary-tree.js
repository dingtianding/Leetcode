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
var diameterOfBinaryTree = function(root, max = [0]) {
    let dia = 0;
    
    dfs(root);
    
    return dia
    
    function dfs(node, level) {
        if(!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        dia = Math.max(dia, left + right);
        
        return 1 + Math.max(left, right);
    }
    
}