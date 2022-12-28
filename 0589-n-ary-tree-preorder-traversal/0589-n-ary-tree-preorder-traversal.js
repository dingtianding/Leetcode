/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// var preorder = function(root, ans=[]) {
//     if (!root) return ans
//     ans.push(root.val)
//     for (let child of root.children)
//         preorder(child, ans)
//     return ans
// };

const preorder = root => {
    if (!root) return []

    let stack = [root]
    let result = []

    while (stack.length) {
        let current = stack.pop();
        result.push(current.val)
        if (current.children) stack.push(...current.children.reverse())
    }

    return result
};