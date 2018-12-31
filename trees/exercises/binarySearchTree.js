class Node {
  constructor(value){
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }
  insert(value){
    // given value
    // create a new node
    // find where to put the node...
    // current node = root
    // while loop (currentNode)
    // is value bigger than currentNode.value?
    // go right
    // else go left
    const newNode = new Node(value)
    let currentNode = this.root
    // is currentNode null?
    if (!currentNode) {
      this.root = newNode
      return this
    }
    // find the proper parent for the new node

    // if there's a root node
    while (currentNode) {
      if (currentNode.value < value) {
        // go right
        if (currentNode.right){
          currentNode = currentNode.right
        } else {
          currentNode.right = newNode
          return this
        }

      } else if (currentNode.value > value){
        // go left
        if (currentNode.left){
          currentNode = currentNode.left
        } else {
          currentNode.left = newNode
          return this
        }
      } else if (currentNode.value === value){
        // node already exists!
        break;
      }
    }
    return this
  }
  lookup(value){
    let foundNode = null;
    let currentNode = this.root
    while (currentNode) {
      if (currentNode.value < value) {
        // go right
        if (currentNode.right){
          currentNode = currentNode.right
        } else {
          break;
        }

      } else if (currentNode.value > value){
        // go left
        if (currentNode.left){
          currentNode = currentNode.left
        } else {
          break;
        }
      } else if (currentNode.value === value){
        foundNode = currentNode
        break;
      }
    }
    return foundNode
    // return the found node
  }
  remove(value){
    // then check for children
    if (!this.root){
      // if there's no root, there's nothing to remove!
      return false
    }
    // need reference to the parent node and the current node
    let parentNode = null
    let currentNode = this.root
    while (currentNode){
      if (currentNode.value < value){
        // go right
        // assign parentNode to currentNode
        parentNode = currentNode
        // assign currentNode to currentNode.right
        currentNode = currentNode.right
      } else if (currentNode.value > value ) {
        // go left
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (currentNode.value === value) {
        // three options
        // no right child
        // right child without children
        // right child w/ children
      }
    }


    // check to see if it has children
    // if it has a right child
    // if it only has a left child
    // if no children - easy, just remove!
  }
}
