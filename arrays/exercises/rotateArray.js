// https://leetcode.com/problems/rotate-array/solution/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// k is always positive

// given array rotate array by k steps
// no return mutate array
// validate for over rotating
// simplify k down to lowest possible amt


// RECURSIVE ROTATE
// const rotate = (nums, k) => {
//     if (k !== 0){
//         const num = nums.pop()
//         nums.unshift(num)
//         rotate(nums, k-1)
//     }
// }

// const rotate = (nums, k) => {
//     while (k > 0) {
//         const num = nums.pop()
//         nums.unshift(num)
//         k--
//     }
// };

const rotate = (nums, k) => {
    // check for length validation
    // smaller divisible k over-rotating
    if (k >= nums.length) {
        k = k % nums.length
    }
    let lastNums = nums.splice(-k,k)
    nums.unshift(...lastNums)
}


// SOLUTIONS

// recursive
// k decreases each time called
// base case k === 0
// every time - pop() and unshift()
// works but is slow
// could be time inefficient depending on how large k gets

// iterative

// loop over array for each k
// mutate array by unshifting to the right each time
// O(n^2) probably


// one shot

// make copy of the end of the array (basically how far right we want to rotate)
// make copy of beginning of array
// update old array to be the two distinct halves
// space inefficient
