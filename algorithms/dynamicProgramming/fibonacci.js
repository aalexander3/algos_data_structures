// fib sequence = 0,1,1,2,3,5,8,13,21,34,55,89,144,233...

function fibonacci(n) {
  // recursive version, slow, not optimized
  // O(2^n) - really bad time complexity
  if (n < 2) return n
  return fibonacci(n-1) + fibonacci(n-2)
}

function memoizedFib(){
  // turns the function into O(n)
  let fibCache = {}
  return function memoFib(n){
    if (fibCache[n]) return fibCache[n]
    if (n < 2) return n
    return fibCache[n] = memoFib(n-1) + memoFib(n-2)
  }
}

const fib = memoizedFib()
// memoization cuts down the number of calcuations signficantly

// increased the space complexity
// decreased the time complexity - significantly
// time complexity: O(n)
