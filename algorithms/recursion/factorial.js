// Write two functions that find the factorial of any number. One should use recursion, the other should be iterative
// Factorial: 5 * 4 * 3 * 2 * 1

function recursiveFactorial(number){
  // if the number is two, stop
   if (number === 2) {
     return number
   }
   return number * findFactorialRecursive(number-1)
}

function findFactorialIterative(number) {
  let result = 1
  for (let i = number; i > 1; i--){
    result *= i
  }
  return result
}

// time complexities
// iterative O(n)
// recursive O(n) - still calling the function the number of times
