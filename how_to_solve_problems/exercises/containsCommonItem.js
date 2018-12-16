// given two arrays, create a funciton that lets a user know (t/f) whether these two array contain any two common items

// ex:
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']
// return false

const array3 = ['a', 'b', 'c', 'x']
const array4 = ['z', 'y', 'x']
// return true

// step 1
// inputs are two arrays
// output is a boolean
// check the cases - are the inputs always arrays

// what's the most important value of the problem?
// how large is the array going to get?
// goal to be effficient in time or space complexity?
// no size limit -- going to get big


// don't ask too many questions

// brute force approach easy, naive solution
// compare each item in array1 to each item in array2. if there is a match return true
// this would be O(a*b) - quadratic time. not so effficient. could probably find a more effficient solution

// function containsCommonItem(array1, array2) {
//   for (let i = 0; i < array1.length; i++ ) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array[i] === array2[j]) {
//         return true
//       }
//     }
//   }
//   return false
// }


// any bottlenecks? could probably do better. make it faster

// function takes first array1 and turns into an object with its values as keys pointing to true
// then loop through array 2 and check if the array2[index] === obj.properties
// two non nested loops
// linear time O(a+b)


// function containsCommonItem(arr1, arr2){
//   let obj1 = {}
//   arr1.forEach(item => {
//     if (!obj1[item]){
//       // if obj doesn't contain that key
//       obj1[item] = true
//     }
//   })
//
//   for(let i = 0; i < arr2.length; i++){
//     if (obj1[arr2[i]]) {
//       return true
//     }
//   }
// }


// possible checks
// downside to this solution is that we are only assuming numbers, strings, etc
// could write a cleaner solution

// can we always assume two parameters?
// what other checks can we perform?

const containsCommonItem = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item))
}






















//
