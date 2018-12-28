class Stack {
  constructor(){
    this.stack = []
  }
  peek(){
    this.stack[this.array.length-1]
  }
  push(value){
    this.stack.push(value)
    return this
  }
  pop(){
    this.stack.pop()
    return this
  }
}


// class Node {
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }
