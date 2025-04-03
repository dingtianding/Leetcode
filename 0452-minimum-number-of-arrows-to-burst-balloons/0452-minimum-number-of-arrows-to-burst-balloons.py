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
        points.sort()
        merged = []
        for point in points:
            if not merged or merged[-1][1] < point[0]:
                merged.append(point)
            else:
                merged[-1][0] = max(merged[-1][0],point[0])
                merged[-1][1] = min(merged[-1][1],point[1])

        return len(merged)
