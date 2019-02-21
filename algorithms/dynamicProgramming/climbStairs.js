/**
 * @param {number} n
 * @return {number}
 */

// ex: 4 === climb(3) + climb(2)
// 1: 1+1+1+1
// 2: 2+1+1
// 3: 2+2
// 4: 1+2+1
// etc

var climbStairs = function(n) {
  let cache = {}
    // n is positive number of stairs
    // output is a number of different ways to get to the top
    // can either climb one or two steps
    // decide to climb one or two stairs, call climb stairs again with 1 or two less steps to the top
  function climb(n){
      if(n===1) return 1
      if (n < 1) return 1
      if (cache[n]) return cache[n]
      return cache[n] = climb(n-1) + climb(n-2)
  }
  return climb(n)
};
