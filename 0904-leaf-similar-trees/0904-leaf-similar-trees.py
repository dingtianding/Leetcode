# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# we dfs through both tree
# left first, then right. 
# current root does not have .left or .right (if statement)
# push current value into our array
# build a tree value array
# see if they ==
# 

class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        array1=[]
        array2=[]

        def dfs(root,array):
            if root and not root.left and not root.right:
                array.append(root.val)
            if root:
                dfs(root.left,array)
                dfs(root.right,array)


        dfs(root1,array1)
        dfs(root2,array2)
        return array1 == array2

        