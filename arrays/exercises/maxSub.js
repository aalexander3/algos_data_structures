// https://leetcode.com/problems/maximum-subarray/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */

// array of numbers input
// find the largest summed subarray
const maxSubArray = (nums) => {
    let maxSoFar = 0
    let maxEnding = 0
    // define a max value
    // loop over the nums array
    // if segment is positive, keep going!
    // if segment is negative, reset it
    // if the current segment is larger than the previous max, update it!
    for(let i=0; i < nums.length; i++){
        maxEnding = maxEnding + nums[i]
        if (maxEnding < 0){
            // case: maxEnding here is negative
            maxEnding = 0
        }
        if (maxSoFar < maxEnding){
            // when maxSoFar is less than maxEnding here, update maxSoFar
            maxSoFar = maxEnding
        }
    }
    if (maxSoFar === 0) {
        maxSoFar = Math.max(...nums)
    }
    return maxSoFar
};
