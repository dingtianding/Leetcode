class Solution(object):
    def decodeString(self, s):
        stack = [''];
        cNum = 0;
        cString = '';
        
        for ele in s:
            if ele.isdigit(): #if num, you set the currnet number to it, or increment accordingly if its double digits
                cNum = cNum* 10 + int(ele)
            elif ele == '[': #
                stack.append(cString) # put the decoded string into stack first
                stack.append(cNum) # get the current number second
                cString = '' #reset
                cNum = 0 #reset
            elif ele == ']': #this is where you decode
                rep = stack.pop() #since line 12 you append cNum last, the number of repeat pops off first
                decoded = stack.pop() #then this is the previous decoded string
                cString = decoded + rep*cString #put together decoded and the cString set in the "else" statement
            else:
                cString += ele #set the letter as the current String
                
        return cString
        