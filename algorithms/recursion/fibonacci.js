// Given a index n return the index value of the fibonacci sequence
// what number is associated with the given index?
// sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// value is the sum of the two previous values


function fibonacciIterative(n){
  // while counter increases
  // new value based on previous two
  // hold an array?
  if (n === 0) return 0
  if (n === 1) return 1
  let fib = [0, 1]
  for (let i = 2; i <= n; i++){
    let numToAdd = fib[i-1] + fib[i-2]
    fib.push(numToAdd)
  }
  return fib[n]
}

function fibonacciRecursive(n) {

  if (n === 0) return 0
  if (n === 1) return 1

  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
  // return value is the sum of the previous two values
}

// time complexities:
// iterative O(n) linear time
// recursive: O(2 ^ n) exponential time... yikes!
// can slim down the time complexity using dynamic programming or memoization
