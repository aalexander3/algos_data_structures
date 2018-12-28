// how to implement a queue using a stack?
class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

// FIFO
// push from front to back
[]
push(1)
[1]
push(2)
[2,1]
push(3)
[3,2,1]
pop()
// => 1
// removes the last item in the stack
[3,2]

class Queue {
  // FIFO
  constructor(){
    this.stack = []
    // stack is LIFO
  }

  push(value){
    // Push element x to the back of queue
    // or in this case to the front of the stack!
    // reverse the arrival order each time an element is added
    if (this.empty()){
      this.stack.push(value)
    } else {
      let tempStack = []
      while (this.stack.length > 0) {
        // [3,2,1]
        // push 4
        // temp stack becomes 1,2,3
        this.tempStack.push(this.stack.pop())
      }
      tempStack.push(value)
      while (this.tempStack.length > 0){
        this.stack.push(tempStack.pop())
      }
    }
    return this.stack
  }

  peek(){
    // Get the front element
    // as a stack means need to store them backwards
    return this.stack[this.stack.length-1]
  }

  pop(){
    // Removes the element from in front of queue
    this.stack.pop()
    return this.stack
  }

  empty(){
    return this.stack.length === 0
  }
}
