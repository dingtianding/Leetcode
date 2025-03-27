# iterarte once to find most frequenet x
# iterate again and counting the
# cut if current count > .5 of current array
# and max - current >.5 of the remainning array

from typing import List
from collections import defaultdict

class Solution:
    def minimumIndex(self, nums: List[int]) -> int:
        count = defaultdict(int)
        for num in nums:
            count[num] += 1
        dominant, max_count = max(count.items(), key=lambda x: x[1])
        
        left_count = 0
        for i, num in enumerate(nums):
            if num == dominant:
                left_count += 1

            left_len = i + 1
            right_len = len(nums) - left_len

            if (left_count * 2 > left_len) and ((max_count - left_count) * 2 > right_len):
                return i

        return -1  
        