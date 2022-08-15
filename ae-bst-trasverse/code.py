def inOrderTraverse(tree, array):
    if tree is not None:
        inOrderTraverse(tree.left, array) # keep on going left until its None
        array.append(tree.value) #append the current value to array
        inOrderTraverse(tree.right,array) #check right after left
        
    return array


def preOrderTraverse(tree, array):
    if tree is not None: # stopping condition
        array.append(tree.value) #append any value avaliable right away
        preOrderTraverse(tree.left, array) # go the left first and append right
        preOrderTraverse(tree.right, array) # then to the right
    return array
    pass


def postOrderTraverse(tree, array):
    if tree is not None:
        postOrderTraverse(tree.left, array) #go all the way to the left most value and start there
        postOrderTraverse(tree.right, array) #append right value after appending left value from the function above
        array.append(tree.value) # append

    return array
    pass
