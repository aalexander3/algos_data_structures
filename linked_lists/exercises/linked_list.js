class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value){
    // create a new node with val
    // const newNode = {
    //   value: value,
    //   next: null
    // }
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value){
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  printList(){
    const array = []
    let currentNode = this.head
    while (currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

  traverseToIndex(index){
    let currentNode = this.head
    let i = 0
    // find the correct location
    while (i !== index) {
      currentNode = currentNode.next
      i++
    }
    return currentNode
  }

  insert(index, value){
    // a little validation to make sure the
    if(index >= this.length){
      return this.append(value)
    }
    let currentNode = this.traverseToIndex(index-1)
    // create a new node
    let newNode = new Node(value)
    // update the newNode to have it's pointer
    // pointing to the currentNode
     newNode.next = currentNode.next
     currentNode.next = newNode
     this.length++
     return this
   }

   remove(index){
     // check params
     // verify that index is positive and inbetween the
     // find the leadingNode
     // hold the node to remove
     let leadingNode = this.traverseToIndex(index-1)
     let holdingNode = leadingNode.next
     leadingNode.next = holdingNode.next
     this.length--
     return this
   }
}


class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

// append method takes in value
// prepend method takes in value

// something that looks like this!
const myList = {
  head: {
    value: 10,
    next: {
      value: newVal,
      next: null
    }
  }
}
