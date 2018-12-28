## Linked Lists

 - lists contain a set of nodes
 - node has two elements
   - value
   - pointer
 - first node is called the head
 - last node is called the tail
 - null terminated
 - element that links to next element, to the next one, until null
 - linked list: apples --> pears --> grapes --> null (pseudo)

 apples
 8947 --> grapes
          8742 --> pears
                   372 --> null

## why are linked lists better than hashes or arrays?
 - search/traversal slow O(n)
 - insert fast
 - push or pop (end or beginning is O(1))
 - loose structure
 - values can be inserted in the middle
 - nothing else needs to change
 - traversal (finding an element) is O(n)
 - nodes are scattered all over
 - iterating is a little slower
 - inserting is faster
 - order matters!
 - can be sorted
 - prepend & append O(1)
 - lookup O(n)
 - insert O(n)
 - delete O(n)
 - worst cases (probably better)

## what is a pointer?
---
 - reference to another place in memory
``` javascript
  const obj1 = { a: true }
  const obj2 = obj1
```
 - pointers reference the place in memory
 - garbage collection == memory is automatically managed and deleted
 - other languages you have to manually delete it!
 
