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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
  const areEqual = (node1, node2) => {
    if (!node1 || !node2) return !node1 && !node2;
    if (node1.val !== node2.val) return false;
    return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right);
  }
  const queue = [root];
  while (queue.length) {
    const node = queue.pop();
    if (!node) continue;
    if (areEqual(node, subRoot)) return true;
    queue.push(node.right, node.left);
  }
  return false;
};