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

   reverse(){
     if(!this.head.next){
       return this.head
     }
     let first = this.head
     let second = first.next

     while(second){
       // as long as second exists
       const temp = second.next
       // set temp equal the next one
       second.next = first
       // second becomes the head aka the tail
       first = second
       second = temp
     }

     this.head.next = null
     this.head = first
     return this.printList()
   }

   // reverse(){
   //   // flips head and tail
   //   // create a new LinkedList with head as the tail
   //   // traverse through the current LinkedList from head to tail
   //   // iterate over the original LL
   //   // for each next, set with the pointer pointing to the previous node
   //   let lastNode = new Node(this.head.value)
   //   let nextLastNode = this.head.next
   //   // new Node(this.head.value)
   //
   //   while(nextLastNode.next !== null){
   //     lastNode.prepend(nextLastNode.value)
   //     nextLastNode = nextLastNode.next
   //     // with a new node -- prepend the value of each node to the new last node
   //     // set the next Last node to the next
   //   }
   //
   //   // reset the head and the tail
   //   this.tail = lastNode
   //   this.head = nextLastNode
   // }
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
