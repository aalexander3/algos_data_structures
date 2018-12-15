boxes = [1,2,3,4,5]

const logPairs = array => {
  for(i = 0; i < array.length; i++){
    for(j = 0; j < array.length; j++){
      console.log(i, j)
    }
  }
}

// nested loops becomes O(n^2)
// Quadratic time
