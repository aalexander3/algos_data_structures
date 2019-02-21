# Dynamic Programming
---
 - optimization technique using caching
 - doesn't mean anything...
 - is there something you can cache?
 - way to solve problems by breaking it down into sub problems and storing those solutions

# Memoization
---
 - caching - a way to store values to use them later on
 - kind of like a backpack. holding the items you need
 - speeds up programs
 - holds data

ex:
``` javascript

function addTo80(n){
  return n + 80
}

let cache = {}

function memoizedAddTo80(n){
  if (n in cache){
    return cache[n]
  } else {
    cache[n] = n + 80
  }
}

```
 - every time you run a function
 - if the operation takes a long time, but the inputs are the same, you could store the output
 - O(1) time with a hash table, super fast!
 - first time through performs the operation, but the next times through will be much faster, because of the memoized cache
 - memoization stores the return value of a function based on a parameter. if that parameter is used as an input again, then you can simply refer to the cache
 - remember a solution to a subproblem

 - don't want the cache to live in global scope. keep it inside a closure

``` javascript
 function memoizedAddTo80(n){
   let cache = {}
   return function(n){
     if (n in cache){
       return cache[n]
     } else {
       cache[n] = n + 80
     }
   }
 }

 const memoized = memoizedAddTo80()
 // can now call memoized(5) or memoized(6)
```
 - increased efficiency and optimization of code
 - combining divide and conquer with reuse (memoization)
1. can the problem be divided into a subproblem
2. is there a recursive solution?
3. are there repetitive subproblems?
4. memoize the subproblems - huge benefits!




























<!--  -->
