# Big O Notation
 - measuring performance
 - how long does it take the code to run?
 - big o complexity chart
 - when the input becomes bigger - how much does the output slow down? ***
  - the less it slows down the better the function
 - different functions have different complexities


 - computers are extremely fast!
 - using performance.now() (only to see how length increases with more inputs)


# O(n)
---
## linear time
 - size of the input compared to the number of operations
 - most common notation
 - for every element - performances an operation

# O(1)
---
## Constant time
 - takes in some argument
 - always performs same number of operations
 - doesn't increase based on input

# O(n^2)
---
 - Quadratic Time
 - line increases very fast
 - number of operations increases significantly
 - O(a*b) for multiple inputs

# O(n!)
---
 - Factorial Time
 - oh no!
 - adding a nested loop for every input that we have
 - very expensive (not very common)

# O(2 ^ n)
---
 - Exponential Time
 - really bad!
 - worse than nested for loops
 - exponential time is really slow

---
# Calculating big O
---
 - not calculating precisely w/ numbers
## four rules to calculate:
  - worst case
  - remove constants
  - different terms for inputs
  - drop non dominants

# Worst Case
 - using break to exit loops if condition is met
 - increases efficiency
 - assumes that the loop runs until the end regardless of break cases
 - ie. item isn't found until the very end

# remove constants
 - O(3n + 23) === O(n)
 - O(n/2 + 1) === O(n)
 - remove constants
 - linear is still linear
 - line might be steeper, but the way the line moves is still the same
 - don't need to use constants

# Different Terms for inputs
 - if there are multiple arguments or inputs
 - O(a + b)
 - inputs could be totally different sizes

# drop non dominants
 - O(n + n^2)
 - don't care about the n + here because it is insignificant
 - O(x^2 + 3X + 100 + x/2 ) === O(x^2)
 - big o concerned about scale rather that initial size
 - like removing constants
 - dominants can scale down to the most important notation

---

# methods have a big o cost
 - data structures also have a cost!
 - different data structures have pros and cons
 - data structures + algorithms === programs
 - keep it readable and scalable

# 3 pillars of code
### what makes for good code?
 - readable, memory and speed
 - readable
 - scalable
    - time complexity
    - space complexity

# how to measure space complexity
 - the heap and the stack

### what causes space complexity?
 - variables
 - data structures
 - function calls
 - allocations

###
