# [10,16],[2,8],[1,6],[7,12]]
# 11111
#    22222
# 11112222
#          333333
#              44444  
# sort it
# going thoruhg use start2 < end1 to find overlap
# if true
#we merged: by taking the start1, greater of end1&2
# once we finish merge, we return the len(of merged array)
# N * log N
# N 
#[[1, 6],
#   [2, 8], 
#      [7, 12], 
#         [10, 16]]


class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points:
            return 0
        points.sort(key = lambda x : x[1])
        # print(points)
        arrows = 1
        first_end = points[0][1]
        for x_start, x_end in points:
            # if the current balloon starts after the end of another one,
            # one needs one more arrow
            if first_end < x_start:
                arrows += 1
                first_end = x_end
        
        return arrows
