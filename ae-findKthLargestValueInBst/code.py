# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right



def findKthLargestValueInBst(tree, k):
    sorted=[]
    inOrderTrasverse(tree, sorted)
    return sorted[len(sorted) - k]
    
def inOrderTrasverse(node, sortedNodeValues):
    if node is None:
        return

    inOrderTrasverse(node.left, sortedNodeValues)
    sortedNodeValues.append(node.value)
    inOrderTrasverse(node.right, sortedNodeValues)


