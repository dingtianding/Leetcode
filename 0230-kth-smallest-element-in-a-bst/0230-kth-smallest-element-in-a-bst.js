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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k, inOrder = []) {
    if (!root) return inOrder

    return dfs(root, k, inOrder);
};

const dfs = (root, k, inOrder) => {
    if (root.left) kthSmallest(root.left, k, inOrder);

    inOrder.push(root.val);

    if (root.right) kthSmallest(root.right, k, inOrder);

    return inOrder[(k - 1)];
}