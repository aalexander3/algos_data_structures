const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // loop over every item
    // compare it to numbers already seen
    // find the closest value and see if it's larger or smaller
    // insert it in place
    // shift everything else over
    if (array[i] < array[0]) {
      // if its the smallest we've seen so far
      // unshift - put array[i] at the front of the array
      //splice removes an el from the array in a certain place - don't add anything back
      array.unshift(array.splice(i,1)[0])
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] < array[j] && array[i] > array[j-1]){
          // if its smaller than the current j val and bigger than the prev j val
          // insert it here
          let removed = array.splice(i, 1)[0]
          array.splice(j, 0, removed)
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
