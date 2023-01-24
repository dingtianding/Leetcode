# let result array that returns the num that traveled
# coordinate x, y
# get the length and widht of the (m * n) matrix
# adjust the x and y to move it.
# build a couple of if statements, when it is OKAY to push into our result
# when it is okay to move onto the next
# while () statement to make we are within the matrix
# right -> down - left - up -> right
# time N * M = N
# space 1 or N
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if len(matrix) == 0:
            return []
        result = []
        left = 0 # 0
        right = len(matrix[0]) - 1 # 0
        top = 0 # 0 > 1
        bottom = len(matrix) - 1# 0
                
        while left <= right and top <= bottom: # left = 2 > 1 right = 2 
            for i in range(left, right + 1): #to right 0, 1, 2
                result.append(matrix[top][i])
            top+=1 # 2
            for i in range(top, bottom + 1): # to bot 1 , 2
                result.append(matrix[i][right])
            right-=1 # 1
            # 1 > 1 
            if top <= bottom:
                for i in range(right, left - 1, -1): # to right 1, 0
                    result.append(matrix[bottom][i]) #[1,1]
                bottom-=1 # 0
            # 1 > 1
            if left <= right:
                for i in range(bottom, top - 1, -1): # to top 1 , 1
                    result.append(matrix[i][left])
                left +=1 # 2

        return result
        