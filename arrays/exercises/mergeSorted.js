// given two sorted arrays
// merge them so that they are still sorted!
const mergeSortedArrays = (arr1, arr2) => {
  // always check inputs
  // will the inputs always be arrays?
  // will the arrays always contain integers?
  // are the arrays of finite length?

  let copied1 = [...arr1]
  let copied2 = [...arr2]
  let mergedArray = []
  // brute force solution
  // for every element on arr2
  // compare it to every element on arr1
  // insert if the item is greater than arr1 current index
  // but less than arr1 next index
  // O(n^2) quadratic time
  // could probably do better

  // next solution - just as bad?
  // look through every item in arr1
  // compare it to first index of arr2
  // if the first index of arr2 is >= currentIndex
  // and <= nextIndex
  // merge it into arr in that position
  // and delete that item from copied arr2
  for(let i = 0; i < copied1.length-1; i){
    // cases
      // copied1[i] is smallest num
      // copied2[0] is bigger num
      // copied1[i] === copied2[0]
      // copied2 still has items at the end!
      if(copied1[i] < copied2[0]) {
        mergedArray.push(copied1[i])
        i++
      } else if (copied1[i] >= copied2[0]) {
        // push and delete
        mergedArray.push(copied2[0])
        copied2.shift()
      }
    }
    if (copied2.length > 0) {
      mergedArray = [...mergedArray, ...copied2]
    }

    return mergedArray
  }

  // clean it up!
  // break it into smaller functions



mergeSortedArrays([1,3,5,6,9],[1,1,1,3,4,10,12,14])
