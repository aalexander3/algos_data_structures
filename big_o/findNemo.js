const nemo = ['nemo']

function findNemo(array) {
  // let t0 = performance.now()
  for (let i = 0; i < array.length; i++){
    // findNemo function is
    // linear time
    // big o notation of O(n)

    if (array[i]==='nemo'){
      console.log('found NEMO')
    }
  }
  // let t1 = performance.now()
  // console.log('time it took in ms:', t1-t0);
}
