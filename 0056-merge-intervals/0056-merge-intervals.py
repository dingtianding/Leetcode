# sort array based on first position, 
# definte mergeable:
# result = [[1,6][8,10],[15,18]]
# 
# start2 is starting before end1(if they equal, they are also mergable). Before first interval is properly end, 2nd already interval
# if merageble:
#      merged = [lesser of starts, greater ends]
#       get a new 2nd
# push the 1st into result,
# 2nd one -> new 1st one
# time  N * logN
# space 1
#
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # if len(intervals) == 1:
        #     return intervals

        intervals.sort() # sort returns null
        result = []
        start1, end1 = intervals[0]# 1,3

        for i in range(1, len(intervals)):
            start2, end2 = intervals[i] # 15,18
            if start2 <= end1: # 8 < 6 == merageable
                end1 = max(end1, end2) # 3 < 6 = 6
                #[1,6]
            else:
                result.append([start1, end1]) #result=[1,6],[8,10]
                start1 = start2 # [15,18]
                end1 = end2

        result.append([start1,end1])

        return result
        