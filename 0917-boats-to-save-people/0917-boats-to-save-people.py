class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        print(people)
        #1223
        #2321 
        #
        people.sort()
        l = 0
        r = len(people) - 1
        ans = 0
        while l <= r:
            left = people[l]
            right = people[r]
            ans+=1
            if left + right <= limit:#biggest guy don't need his own boat
                l += 1
            r -= 1
        return ans
                    