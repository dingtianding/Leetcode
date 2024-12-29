class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        
        for c in tokens:
    
            if c ==  "+":
                sum = stack.pop() + stack.pop()
                stack.append(sum)
            elif c == "-":
                a, b = stack.pop(), stack.pop()
                diff = b - a
                stack.append(diff)
            elif c == "*":
                prod = stack.pop() * stack.pop()
                stack.append(prod)
            elif c == "/":
                a, b = stack.pop(), stack.pop()
                stack.append(int(float(b) / a))
            else:
                stack.append(int(c))
        return stack[0]
    