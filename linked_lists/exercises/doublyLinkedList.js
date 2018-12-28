class DoublyLinkedList {
  constructor(value){
    // add a previous node to the constructor
    this.head = {
      value: value,
      next: null,
      previous: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value){
    // create a new node with val
    // const newNode = {
    //   value: value,
    //   next: null
    //   previous: null
    // }
    const newNode = new DoubleNode(value)
    this.tail.next = newNode
    newNode.previous = this.tail
    this.tail = newNode
    this.length++
    return this.printList()
  }

  prepend(value){
    const newNode = new DoubleNode(value)
    newNode.next = this.head
    this.head.previous = newNode
    this.head = newNode
    this.length++
    return this.printList()
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

  backwardsTraverse(index){
    let i = this.length
    let currentNode = this.tail
    while (i !== index) {
      currentNode = currentNode.previous
      i--
    }
    return currentNode
  }

  insert(index, value){
    // a little validation to make sure the
    if(index >= this.length){
      return this.append(value)
    }
    // find the node before the index
    let currentNode
    if (index > this.length/2){
      currentNode = this.backwardsTraverse(index)
    } else {
      currentNode = this.traverseToIndex(index-1)
    }
    // create a new node
    let newNode = new Node(value)
    // update the newNode to have it's pointer
    // pointing to the currentNode
    let holdingNode = currentNode.next
    // assign new Node a next value
    newNode.next = holdingNode
    holdingNode.previous = newNode

    currentNode.next = newNode
    newNode.previous = currentNode
    this.length++
    return this.printList()
   }

   remove(index){
     // check params
     // verify that index is positive and inbetween the
     // find the leadingNode
     // a little validation to make sure the
    if(index >= this.length){
      return this.append(value)
    }
    // find the node before the index
    let currentNode
    if (index > this.length/2){
      currentNode = this.backwardsTraverse(index)
    } else {
      currentNode = this.traverseToIndex(index-1)
    }
     // hold the node to remove
     let holdingNode = currentNode.next
     let nodeToReplace = holdingNode.next
     currentNode.next = nodeToReplace
     nodeToReplace.previous = currentNode
     this.length--
     return this.printList()
   }
}


class DoubleNode {
  constructor(value){
    this.value = value
    this.next = null
    this.previous = null
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
