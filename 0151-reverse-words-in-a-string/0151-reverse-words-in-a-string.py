# 1. reverse words with 1 space
# 2. trim the leading and trailing spaces
# 3. when they more than 1 space we only want one.
# trim function get rid of leading and trailing
# for beginning if its " ", slice[]
# for end if its " " 
# string split it based on the location of " "
# end up array of words, .reverse (0 -> words.length -1 , 1 -> word.length-2)
# when I get "", move on
# time N
# space N

class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split()
        print(words)
        filtered_words = [word for word in words if word != ""]
        print(filtered_words)
        reversed_words = words.reverse()
        print(words)
        new = " ".join(words)
        print(new)
        return new



        