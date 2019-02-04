const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  // scan for the smallest item and put it in the earliest position
  for(let i=0; i<array.length; i++){
    let smallest = array[i]
    for (let j=i; j<array.length; j++){
      // j = i because it needs to skip the already sorted small numbers
      if (smallest > array[j]) {
        // item at j is smaller than smallest
        smallest = array[j]
      }
    }
    let tempIndex = array.indexOf(smallest)
    array[tempIndex] = array[i]
    array[i] = smallest
  }
}
