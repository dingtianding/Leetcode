class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        i, j = 0, len(s) - 1
        
        while i < j:
            while i < j and not s[i].isalnum():
                i += 1
            while i < j and not s[j].isalnum():
                j -= 1
                
            if s[i].lower() != s[j].lower():
                return False
            
            i += 1
            j -= 1
        
        return True
        
        # two pointers 
        # cleanse string, set up a bunch if statements
        # if uppercase turn into lower case
        # if empty then skip it
        # if its : we skip it too
        # if its not alphabet we skip
        # return false if the letter on each pointer deos not agree
        # N
        # space 2
#         hash = {chr(upper): chr(lower) for upper, lower in zip(range(65, 91), range(97, 123))}
        
#         p1 = 0
#         p2 = len(s) - 1
        
#         while p1 < p2: #think about equal and how do they exit to a true
#             c1 = hash[p1]
#             c2 = hash[p2]
            
#             if c1 in hash.keys:
#                 c1 = hash.value
#             if c2 in hash.keys:
#                 c2 = hash.value
#             if c1 not in hash.value: # if its noalpah
#                 p1 += 1
#             if c2 not in hash.value: # if its no5alpah
#                 p2 -= 1
#             if c1 != c2
#                 return False    
        
#         return True

        
        