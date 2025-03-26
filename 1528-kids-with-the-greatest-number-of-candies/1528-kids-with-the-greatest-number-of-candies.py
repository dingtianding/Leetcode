# two pass:
# first pass: establish which is the max
# second pass: attempt to get T / F


class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        result = []
        # maxC = 0
        # for candy in candies:
        #     maxC = max(maxC, candy)
        maxC = max(candies)

    
        for i in range(len(candies)):
            potential_max  = candies[i] + extraCandies
            # if :
            result.append(potential_max >= maxC)
            # else:
            #     result.append(False)

        return result