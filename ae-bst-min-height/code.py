# def minHeightBst(array):
#     return construct(array, None, 0 , len(array) - 1)

# def construct(array, bst, startIdx, endIdx):
#     if endIdx < startIdx:  #stopping condition
#         return
#     midIdx = (startIdx + endIdx) // 2 #get the middle value
#     valueToAdd = array[midIdx] #set that as the value to add to tree
#     if bst is None:  #if empty
#         bst = BST(valueToAdd)  #bst's value will be the mid value
#     else:
#         bst.insert(valueToAdd) #if not then insert based on bst logic
#     construct(array, bst, startIdx, midIdx - 1) #recurse for left
#     construct(array, bst, midIdx + 1, endIdx) #recurse for right
#     return bst #return
    
# class BST:
#     def __init__(self, value):
#         self.value = value
#         self.left = None
#         self.right = None

#     def insert(self, value):
#         if value < self.value:
#             if self.left is None:
#                 self.left = BST(value)
#             else:
#                 self.left.insert(value)
#         else:
#             if self.right is None:
#                 self.right = BST(value)
#             else:
#                 self.right.insert(value)

def minHeightBst(array):
    return construct(array, None, 0, len(array) - 1)

def construct(array, bst, startIdx, endIdx):
    if endIdx < startIdx:
        return
    midIdx = (startIdx + endIdx) // 2 #round down
    newBstNode = BST(array[midIdx]) #set mid one was top value
    if bst is None:
        bst = newBstNode
    else:
        if array[midIdx] < bst.value: #if current mid value is less
            bst.left = newBstNode #set left to the newBstNode
            bst = bst.left  #set current bst to that one was just set
        else:
            bst.right = newBstNode #same for right
            bst = bst.right
    construct(array, bst, startIdx, midIdx - 1)
    construct(array, bst, midIdx + 1, endIdx)
    return bst
    


class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BST(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BST(value)
            else:
                self.right.insert(value)


def minHeightBst(array):
    return construct(array, 0, len(array) - 1)

def construct(array, startIdx, endIdx):
    if endIdx < startIdx:
        return None
    midIdx = (startIdx + endIdx) // 2
    bst = BST(array[midIdx])
    bst.left = construct(array, startIdx, midIdx - 1)
    bst.right = construct(array, midIdx + 1, endIdx)
    return bst
