//https://leetcode.com/problems/contains-duplicate/submissions/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// returns true if a number appears at least twice
// returns false if there are no duplicates

// is the array sorted?
// is there a maximum size ?
// concerned more about time or space?

// base cases
// if array is empty
// if array is 1 item


// brute force --
// iterate over every number
// iterate again inside the loop
// check every number against all others in the array
// if any number matches - return true

// better solution
// keep a log of numbers that we've seen
// maybe a map
// for each number, see if the map contains that key


const containsDuplicate = (nums) => {
    let previouslySeenNumbers = new Set([])
    let found = nums.find(num => {
        if (previouslySeenNumbers.has(num)) {
            return true
        } else {
            previouslySeenNumbers.add(num)
            return false
        }
    })
    return !!found || found === 0
};
