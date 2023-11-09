class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        
        countS = {}
        countT = {}
        
        for i in range(len(s)):
            charS = s[i]
            charT = t[i]
            countS[charS] = countS.get(s[i], 0) + 1
            countT[charT] = countT.get(t[i], 0) + 1
        return countS == countT