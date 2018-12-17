// building an array with array methods from scratch!
class MyArray {
  constructor(){
    this.length = 0
    this.data = {}
  }
  get(index){
    return this.data[index]
  }
  push(item){
    this.data[this.length] = item
    this.length++
    return this.length
  }
  pop(){
    const lastItem = this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--
    return lastItem
  }
  delete(index){
    const item = this.data[index]
    this.shiftItems(index)
    return item
  }
  shiftItems(){
    // O(n)
    // loop through and make each element in the array
    // be equal to the element at index + 1
    // moves everything over by one place
    for(let i = index; i < this.length-1; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1]
    this.length--
  }
}
