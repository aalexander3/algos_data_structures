const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// left: 44, 99
// right: 2,6
// result = [2,6,44,99]
function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let halfIndex = Math.floor(array.length / 2)
  let left = array.slice(0, halfIndex)
  let right = array.slice(halfIndex)
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let leftIndex = 0
  let rightIndex = 0
  let result = []
  // left[0]
  // compares the first left with all the right
  while (leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] > right[rightIndex]) {
      // if right is smaller than left
      // place the right el on the array
      result.push(right[rightIndex])
      rightIndex++
    } else if (left[leftIndex] < right[rightIndex]){
      // if right (sorted) is bigger than left
      // place the left el on the array
      result.push(left[leftIndex])
      leftIndex++
    } else if (left[leftIndex] === right[rightIndex]) {
      // if the elements are the same
      result.push(left[leftIndex], right[rightIndex])
    }
  }

  console.log(left, right)

  return(result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)))
}


const answer = mergeSort(numbers);
console.log(answer);
