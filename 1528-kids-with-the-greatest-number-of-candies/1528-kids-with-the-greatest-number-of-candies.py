# two pass:
# first pass: establish which is the max
# second pass: attempt to get T / F


class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        result = []
        maxC = 0
        for candy in candies:
            maxC = max(maxC, candy)

        for i in range(len(candies)):
            potential_max  = candies[i] + extraCandies
            if potential_max >= maxC:
                result.append(True)
            else:
                result.append(False)

        return result