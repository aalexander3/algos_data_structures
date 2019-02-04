const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  // 2 items to compare first and second index
  // check if item i > than item j
  // if so, swap, if not keep
  // nested for loops
  // pass through n times * comparisons n times
  
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      if (array[j] > array[j+1]) {
        let z = array[j]
        array[j] = array[j+1]
        array[j+1] = z
      }
    }
  }
  return array
}

bubbleSort(numbers);
