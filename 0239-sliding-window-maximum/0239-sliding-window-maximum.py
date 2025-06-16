class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        output = []
        q = deque()
        l = 0
        r = 0

        while r < len(nums):
            while q and nums[q[-1]] < nums[r]:#if new is the greatest
                q.pop() #clear the que of the smaller number
            q.append(r) # index

            if l > q[0]: # remove old(earlier in que) if out of range to l(start of window)
                q.popleft()

            if (r + 1) >= k: #if at window size
                output.append(nums[q[0]])
                l += 1#shrink 1
            r += 1 #add on

        return output
        