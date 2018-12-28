## doubly linked Lists
 - similar to a linked list, but links to two nodes instead of one
 - links to previous
 - not just next
 - can traverse backwards!
 - can easily find the previous node
 - lots of things will be about twice as fast because you can determine which side of the list to start searching from!

## Big O's
---
prepend O(1)
append O(1)
lookup O(n) <!-- really is O(n/2)-->
insert O(n) <!-- really is O(n/2)-->
delete O(n) <!-- really is O(n/2)-->

- has to hold a little bit more memory (a downside)


## when to use a single vs a double?
- single: less space in memory, fast insertion, deletion
- double: more space, easier to traverse, can traverse forward or backward, good for searching
