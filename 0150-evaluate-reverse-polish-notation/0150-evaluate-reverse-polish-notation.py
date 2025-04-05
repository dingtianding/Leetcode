# stack = result, 3
# + operation result = stack[-1] + stack[-1] 
# * operation = result * 3 = 
# put it back
# round down
# stack to keep track of past values and result
# when we hit any kind of operation, we going access last two position and calc according
# push the result back into stack
# assuming 1 result in the stack return that 
# performance = N
# space = N 
# 
# 

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for token in tokens:
            if token == "+":
                second = stack.pop()
                first = stack.pop()
                result = first + second
            elif token == "-":
                second = stack.pop()
                first = stack.pop()
                result = first - second
            elif token == "*":
                second = stack.pop()
                first = stack.pop()
                result = first * second
            elif token == "/":
                second = stack.pop()
                first = stack.pop()
                result = first / second
                if result > 0:
                    result = math.floor(result)
                else:
                    result = math.ceil(result)        
            else: 
                result = int(token)
            stack.append(result)
            # print(stack)

        return stack[0]

        # tokens =
# ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

# Use Testcase
# Stdout
# [10]
# [10, 6]
# [10, 6, 9]
# [10, 6, 9, 3]
# [10, 6, 12] + 
# [10, 6, 12, -11] *
# [10, 6, -132]  
# [10, -1]
# [-10]
# [-10, 17]
# [7]
# [7, 5]
# [12
        