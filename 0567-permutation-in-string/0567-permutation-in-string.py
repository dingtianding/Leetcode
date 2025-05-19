# N + M
# N + 1
from collections import Counter

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        n1, n2 = len(s1), len(s2)
        if n2 < n1:
            return False

        count1 = Counter(s1)
        count2 = Counter()

        for i in range(n2):
            count2[s2[i]] += 1

            if i >= n1:
                left_char = s2[i - n1]
                count2[left_char] -= 1

            if count1 == count2:
                return True

        return False


                




        