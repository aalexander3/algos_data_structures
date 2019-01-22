# trees
---
 - hierarchical structure (not linear)
 - has many different nodes with parent child relationship
 - subtrees
 - the DOM is a tree
 - chess computers used to make moves based on a tree algorithm
 - has nodes
 - nodes can have any kind of value
 - node can only point to the child
 - lots of different types of trees
 - minor alterations / small differences

## Binary Trees
---
 - Binary tree has some rules:
 - each node can only have 0, 1, or 2 children
 - cannot have more than 2!
 - left pointer and right pointer
 - needs to have two pointers in the node
   - perfect binary tree has either 0 or 2 nodes
   - which means that the number of nodes doubles each level
   - number of nodes on the bottom level = the higher nodes + 1
   - half of the data lives on the bottom
   - new notation O(log n) !!!!

## O(log n)
---
 - LOGARITHMIC TIME
 - certain ways to calculate number of nodes
  - Level 0: 2^0 = 1
  - Level 1: 2^1 = 2
  - Level 2: 2^2 = 4
  - Level 3: 2^3 = 8
 - can find number of nodes: 2^h - 1 (height)
 - log(nodes) = height
 - based on the height. max number of decisions is based on the height
 - decide to go left or right on each level down
 - minimize the steps
 - divide and conquer

## Binary Search Trees
---
 - good at searching and comparing things
 - data structure that preserves relationships
 - parent folder / child folder
 - some rules:
  - all nodes to the right of the root node must be greater than that node
  - all nodes to the left of the root node must be smaller that that node
  - node can only have up to two children!
  - don't have to iterate
 - lookup O(log n)
 - insert O(log n)
 - delete O(log n)
 - in any case, we have to find the node before we can insert or delete!
 - removing replaces a node with a child node

## Balanced VS unbalanced BST
---
- if all the nodes go to one side (unbalanced)
  - sort of turns into a linked list - gets slower!
- balanced - faster
- ideally keep them balanced so they stay logarithmic
- how to keep it balanced?
 - AVL Tree
 - Red Black tree

### BST
---
 - strengths:
  - better than O(n)
  - ordered / structured / sorted
  - flexible size
 - downside:
  - no O(1) operations


### AVL Tree & Red/Black Tree
---
 - automatically rebalances the tree
 - performs a rotation


### Heap & Binary Heaps (data structure)
---
 - Binary -- two children
 - Heap
 - every child node is smaller than the parent node (max heap)
 - also can have min heap
 - value can be anything
 - top level has the greatest value
 - lookup O(n)
 - insert O(log n)
 - delete O(log n)
 - great at comparative operations
 - heaps maintain the order
 - will do a switch after the insert if the placement isn't quite right
 - memory heap !== heap data structure
 - no order from left to right
 - left to right insertion
 - memory efficient

### Priority Queue
---
 - each element has a priority
 - element with higher priority gets served first
 - everything stays balanced
 - order is easy
 - flexible size
 - fast insert
 - slow lookup


### Trie
---
 - Specialized tree
 - has a starting point
 - multiple children
 - prefix tree
 - many letters
 - autocompletion
 - can search through words in dictionary
 - O(length of word)
 - very fast!
 - space complexity
 - also good! letters get stored and have similarities









---
