## stacks and queues
---
 - both linear data structures
 - traverse through one element at a time
 - implemented in a similar way
 - limiting datastructure
 - why use it??
 - less actions you can perform on it
 - control over the operations

# Stacks
---
 - linear data structure
 - stack of plates
 - pieces of data get stacked on top of each other
 - can only access the top of the stack
 - LIFO
 - Last In First Off
 - some examples:
   - browser history
   - simultaneous function calls
- lookup O(n)
- pop O(1)
- push O(1)
- peek O(1)

# Queues
---
 - linear data structure
 - FIFO
 - First In First Off
 - popular examples:   
   - restaurant check in
   - printer queue
   - concert waitlist
 - lookup O(n)
 - enqueue O(1)
 - dequeue O(1)
 - peek O(1)
 - peek means what's the first item that will come off
 - why not use an array to build a queue?
 - inefficient! unshift for arrays is O(n)
 - unnecessary for the functionality


## Using stacks and queues
---
 - ismplement queue using stacks
