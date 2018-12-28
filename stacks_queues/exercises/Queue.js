class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}


class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.length = 0
  }

  peek(){
    return this.first
  }

  enqueue(value){
    // add to the queue
    // add to the end
    // check for empty
    const newNode = new Node(value)
    if (!this.isEmpty()){
      this.last.next = newNode
      this.last = newNode
    } else {
      this.first = newNode
      this.last = newNode
    }
    this.length++
    return this
  }

  dequeue(){
    // remove from the queue
    const first = this.first
    if (!this.isEmpty()){
      // remove the first
      this.first = first.next
      this.length--
    }
    if (this.isEmpty()){
      this.last = null
    }
    return first
  }

  isEmpty(){
    return this.length === 0
  }
}
