# orginal array, remove duplicate(in-place)
# result to each uniqeu elements to appear twice
# same order
# two or more pointer, 
# there is a slower pointer that does the writer on the orignal array.
# hash to keep the counts
# so we check a number
# if it doesnt, we init the hash with number as key and value at 1
# enxt time we see, we increase it to 2
# if it reaches 2+, "remove it"
# def of removing:writer pointer to not write it
# return index position of our writer at the end, 
# if writer pointer is 5, it means we have 5 elements in our array that is cosnider result
# even if there is number behind the 5 element we don't give a s
# N 
# N = hash to keep track of count

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        count_map = {}  # Dictionary to keep track of counts    
        j = 0  # Writer pointer

        for num in nums:
            if num not in count_map:
                count_map[num] = 0 #
            count_map[num] += 1 #count the num

            if count_map[num] <= 2:  # Allow at most two occurrences
                nums[j] = num
                j += 1 # writer if it is written

        return j  # New length of modified array



        