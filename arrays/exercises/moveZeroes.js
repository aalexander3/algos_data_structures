// https://leetcode.com/problems/move-zeroes/submissions/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// move zeros to end of the array while maintaining the order of everything else
// iterate over the array
// check if the item === 0
// remove it from current index - push to back
// const moveZeroes = (nums) => {
//     // O(n) approach -
//     let zeroes = [] // count the zeroes
//     // if array length === 0 or 1
//     if (nums.length <= 1) return nums
//    for(let idx = 0; idx < nums.length; idx){
//        console.log('idx: ', idx, 'nums length: ', nums.length)
//        if (nums[idx] === 0) {
//            nums.splice(idx, 1)
//            zeroes.push(0)
//        } else {idx++}
//     }
//     nums.push(...zeroes)
// };

const moveZeroes = nums => {
    let lastNonZeroIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
// if the number isn't a zero, set it to the either it's own index or the index of the zero that was right before it!
// swap the zero and the non zero el
            let lastNum = nums[lastNonZeroIndex]
            nums[lastNonZeroIndex++] = nums[i]
            nums[i] = lastNum
        }
    }

    // for (let i = lastNonZeroIndex; i < nums.length; i++) {
    //     // fill in the zeroes at the end
    //     nums[i] = 0
    // }
}
