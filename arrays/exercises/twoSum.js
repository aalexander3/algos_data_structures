// https://leetcode.com/problems/two-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let compObj = {}
    let result = []
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        let match = compObj[nums[i]]
        if(match !== undefined){
           result = [match, i]
        } else {
            compObj[complement] = i
        }
    }
    return result
};
