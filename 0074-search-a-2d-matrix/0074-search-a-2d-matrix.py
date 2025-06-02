#find row first 
# compare 3 againist mid row 10 and 20
# 1. 3 > 10 so move up
# 2. if between pick that row
# 3. if target great we move down
#then columns
# target vs mid
# if target greater, pick right
#. if target smaller, pick left
# time Log * M * N
# 

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows = len(matrix)
        cols = len(matrix[0])
        top = 0
        bot = rows - 1
        while top <= bot:
            row = (top + bot) // 2
            if target > matrix[row][-1]:
                top = row + 1
            elif target < matrix[row][0]:
                bot = row - 1
            else:
                break 

        if not (top <= bot):
            return False
        
        row = (top + bot) // 2
        l, r = 0, cols - 1
        while l <= r:
            m = (l + r) // 2
            if target > matrix[row][m]:
                l = m + 1
            elif target < matrix[row][m]:
                r = m -1
            else:
                return True
        return False
        

         
        return True
        return False
        

        