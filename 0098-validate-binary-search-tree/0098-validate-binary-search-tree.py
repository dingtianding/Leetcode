# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# BST vs BST
# 1. All right of the root(subsquent root) is greater
#    min for going rihgt = false -> return
# 2. All left is smaller
#    max for going left = false -> return
# 3. DFS 
# time N (number of nodes)
# space 2 + N(height of the tree/call stacks)
#
#
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:


        def dfs(node, mini, maxi) -> bool:
            if not node:
                return True
            
            if node.val <= mini: # 2 < -999999
                return False  
            if node.val >= maxi: # 2 > 9999999
                return False
            
            return dfs(node.left, mini, node.val) and dfs(node.right, node.val, maxi) #dfs(1, 9999999, 2)


        return dfs(root, float('-infinity'), float('infinity')) #
        