class myHashTable {
  constructor(size){
    this.data = new Array(size)
  }

  _hash(key){
    let hash = 0
    for(let i=0; i<key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set = (key, value) => {
    let address = this._hash(key)
    if (!this.data[address]){
      this.data[address] = []
    }
    this.data[address].push([key, value])
  }

  get = (key) => {
    let address = this._hash(key)
    let bucket = this.data[address]
    if (bucket) {
      return bucket.find(item => item[0] === key )[1]
    }
    return undefined
    // the array in that place in memory
    // find the item with the key === key
  }

  keys = () => {
    // loop through all the keys
    // return the keys in an array
    const keysArray = []
    this.data.forEach(address => {
        keysArray.push(address[0][0])
    })
    return keysArray
  }
}


// first item in the array is [['key', 'value']]
// get and set methods

// _methodName is trademark for a private method
