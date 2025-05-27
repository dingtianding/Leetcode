class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort()
        # print(intervals)
        res = 0
        prevEnd = intervals[0][1]

        for i in range(1, len(intervals)):
            # print(res)
            early = intervals[i-1]
            current = intervals[i]

            if current[0] < prevEnd: # there is a overlap
                # print(current, early,prevEnd)
                res +=1
                prevEnd = min(prevEnd, current[1]) 
            else:
                prevEnd = current[1]

        return res


        