class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        hash = {")": "(", "]": "[", "}": "{"}
        
        for char in s:
            if char in hash: #if closing  
                if stack and stack[-1] == hash[char]:
                    stack.pop()
                else:
                    return False  # Unmatched closing bracket
            else:# if opening
                stack.append(char)  # It's an opening bracket, add to stack
            
        return len(stack) == 0  # If stack is empty, all brackets are matched

            
        
# opening tag, it automatically get put into stack, but we need to access the opening tag when we ever encounter a closing tag.
        
#         Input: s = "([])"
#       iterarte through string
#       put into 
#      stack = [ ( , { ]
#       when onto 3rd paranethese in the string
#       we pop the last char in the stack
#       compare(if statement) to see if it s a properly closing paraenthese.
#       how to properly recognize closing tag to opening(dictionary)
#           if not return false
#        return true, when we finish iterating with the string and the stack is empty. meaning we have a equal amount of open and closing tag. 
# time of N
# space of N 

        

