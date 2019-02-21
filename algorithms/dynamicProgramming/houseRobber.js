/**
 * @param {number[]} nums
 * @return {number}
 */

// two options
// a - rob current house
// b - don't rob current house
// either way can't rob i-1 but can rob from i-2
var rob = function(nums) {
    let cache = {}
    function helper(nums, i){
        if (cache[i]) return cache[i]
        if (i < 0) return 0
        return cache[i] = Math.max(helper(nums, i-2) + nums[i], helper(nums, i-1))
    }
    return helper(nums, nums.length-1)
};
