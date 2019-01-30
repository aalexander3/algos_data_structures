## Recursion
---
 - not an algorithm, more of a concept!
 - popular interview topic

What is recursion?
---
 - functions that refer to itself inside the function
 - when the function runs, it calls itself and runs again
 - great for tasks that have repeated sub tasks
 - traversing a tree (repeated tasks)
 - not all that complex

## Stack Overflow
---
scenario:
- tap pouring water into glass
- continuously does it until the cup overflows
- call stack exceeded
- function calls get added to the call stack over and over again
- infinite loops
- stack holds all the function calls
- can be expensive with memory size

## Anatomy of Recursion
---
Base Case
 - recursive functions need to have a base case
 - something that stops the function from calling itself again
 - needs return value to bubble up to the top function call
 - return either base case or the recursive function

### Rules
 1. identify the base case
 2. identify the recursive case
 3. get closer and closer and return when needed

## Theorem
---
anything that can be implemented recursively can be implemented iteratively
 - why use recursion then?
 - always pros and cons
 - recursion can keep your code DRY
 - simply written code
 - readability
 - not always the best approach still
 - creates an extra memory footprint
 - stack overflows
 - good for tree data structures

## Tail Call Optimization
---
 - ES6

## When to use recursion
---
 - traversing trees or graphs
 - BFS & DFS
 - sorting sometimes
 - every time you use a tree - consider recursion
 - smaller and smaller pieces
 - subproblems are identical in nature
 - solutions of the subproblems can be combined to solve the problem at hand
 - divide and conquer using recursion
