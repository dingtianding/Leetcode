class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        meetings.sort()
        # print(meetings)
        # sorted [[1, 3], [5, 7], [9, 10]]
        res = 0
        last = 0

        for start, end in meetings:
            #if there is is a gap
            if start > last + 1:
                gap = start - last - 1
                res += gap
            #account for overlapping meetings
            last = max(last, end)
        res += days - last

        return res