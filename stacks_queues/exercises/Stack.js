class Stack {
  constructor(){
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek(){
    // look at the top item on the stack
    return this.top
  }

  push(value){
    // add a new value to the top of the stack
    // make a new node with the given value
    const newNode = new Node(value)
    // check to see if there are nodes in the stack
    if (!this.isEmpty()){
      // set the new node's next to the current top el
      newNode.next = this.top
      this.top = newNode
    } else {
        //
        this.top = newNode
        this.bottom = newNode
    }
    // incremenet the length
    this.length++
    return this
  }

  pop(){
    // remove the top item from the stack
    // check isEmpty
    const top = this.top
    if (!this.isEmpty()){
      this.top = top.next
      this.length--
    }
    if (this.isEmpty()){
      this.bottom = null
    }
    return top
    // hold the top element
    // set the top the be the next held el
  }

  isEmpty(){
    // method that checks to see if stack is empty t/f
    return this.length === 0
  }
}

class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}
