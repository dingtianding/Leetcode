# 3749 -> MMMDCC XL IX
# dictionary to definition of Number to Roman - reversed
# I - 1, 
# IV - 4, 
# V - 5, 
# IX - 9
# X - 10, 
# XL - 40
# L - 50, 
# XC - 90
# C - 100, 
# CD - 400
# D - 500,
# CM = 900 
# M - 1000, 


# if 3749 > 1000: 
#    3749/1000 = 3 mod 749
#.   dictionary[1000] = M
#.   result adds M three times
# if 749 / 900
# 
# if remain > 500:
#    749 / 500 = 1 mod 249
#    result add D
# if 249 > 100:
#.   249/100 = 2 mod 49
# result add CC
# if 49
# takes remaing until we use them all 
# performance 3999 = 
# 1


# Example 1:
# Input: num = 3749
# Output: "MMMDCCXLIX"
# Explanation:
# 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
#  700 = DCC as 500 (D) + 100 (C) + 100 (C)
#   40 = XL as 10 (X) less of 50 (L)
#    9 = IX as 1 (I) less of 10 (X)
# Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
# Example 2:
# Input: num = 58
# Output: "LVIII"
# Explanation:
# 50 = L
#  8 = VIII
# Example 3:
# Input: num = 1994
# Output: "MCMXCIV"
# Explanation:
# 1000 = M
#  900 = CM
#   90 = XC
#    4 = IV
class Solution:
    def intToRoman(self, num: int) -> str:
        result = ""
        if num >= 1000:
            m = num//1000
            num = num % 1000
            result += m*"M"
        if num >= 900:
            result += "CM"
            num %= 100
        if num >= 500:
            result += "D"
            num = num-500
        if num >= 400:
            result += "CD"
            num %= 100
        if num >= 100:
            c = num//100
            result += c*"C"
            num %= 100
        if num >= 90:
            result += "XC"
            num %= 10
        if num >= 50:
            result += "L"
            num -= 50
        if num >= 40:
            result += "XL"
            num %= 10
        if num >= 10:
            x = num//10
            result += x*"X"
            num %= 10
        if num == 9:
            result += "IX"
            num = 0
        if num >= 5:
            result += "V"
            num -= 5
        if num == 4:
            result += "IV"
            num = 0
        if num > 0:
            x = num//1
            result += x*"I"
            num = 0

        return result
            

        
        