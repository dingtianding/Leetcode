# return maximum area that can be form with two heights
# area = lower of the two height * their(index difference)
# two pointer = 0, length - 1
# as we move the pointer, we recalc the area, the update the max if it is greater
# if statement/condition for the pointer movements
# two pointer: which pointer movement is better for us in term of areas.
# movement = we look next pointer to see which is better(height is greater), then we move that pointer
# Input: height = [1,8,6,2,5,4,8,3,7]
#                      l   r
# max = 7 * 7 = 49 
#
# Output: 49
# Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
# time o N
# space o 1

class Solution:
    def maxArea(self, height: List[int]) -> int:
        result = -100000
        l = 0 
        r = len(height) - 1

        while l < r:
            distance = r - l
            lower = min(height[l],height[r])
            area = distance * lower
            result = max(result, area)

            if height[l] < height[r]: # improve the result getting rid of the lower height
                l += 1
            else: 
                r -= 1

        return result

        