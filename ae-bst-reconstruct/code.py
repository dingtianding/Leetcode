#ELI reverse a preOrderT and make it back into a tree


# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def reconstructBst(input):
    if len(input) == 0:
        return None

    currentValue = input[0]
    rightIdx = len(input)

    for idx in range(1, len(input)):
        value = input[idx]
        if value >= currentValue:
            rightIdx = idx
            break

    leftTree = reconstructBst(input[1:rightIdx])
    rightTree = reconstructBst(input[rightIdx:])
    return BST(currentValue, leftTree, rightTree)

# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

class TreeInfo: # create a tree class
    def __init__(self, rootIdx):
        self.rootIdx = rootIdx

def reconstructBst(input):
    treeInfo = TreeInfo(0)
    return helper(float("-inf"),float("inf"), input, treeInfo) # pass in max and min

def helper(lower, upper, input, treeInfo):
    if treeInfo.rootIdx == len(input): #stopping condition when input and tree is the same size
        return None

    rootValue = input[treeInfo.rootIdx]
    if rootValue < lower or rootValue >= upper: #stopping condition when rootvalue is out of the bound
        return None 

    treeInfo.rootIdx += 1 
    leftTree = helper(lower, rootValue, input, treeInfo)
    rightTree = helper(rootValue, upper, input, treeInfo)
    return BST(rootValue, leftTree, rightTree)


