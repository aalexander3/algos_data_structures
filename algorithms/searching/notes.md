## Searching and Traversal
---
# Breadth First Search (BFS) and Depth First Search (DFS)
---
 - Linear Search
 - Binary Search
 - DFS
 - BFS

---
# Linear Search
---
- sequential search
- method of finding a target value within a list
- sequentially checks the list for the value until the match is found
- loop over everything and check for some value to match

| Worst Case |
|------------|
| O(n)       |

built in methods with JavaScript
 - indexOf
 - findIndex
 - find
 - includes

---
if the list is sorted, can we improve the time from  O(n) ???

---
# Binary Search
---
| Worst Case |
|------------|
| O(log(n))  |
 - if the array is sorted, can start in the middle of the list and go from there
 - check the array in halves and compare only the half that matters
 - able to cut down the number of comparisons / operations significantly
 - binary search trees
 - storing data in a tree is more efficient than storing in an array
 - so its better to keep items sorted with a tree than pushing randomly onto an array
 - O(log(n))
 - split a list, check if the item is on the right or the left
 - go from there
 - instead of using for loops (linear search) can use lookup method (while loop)
 - Traversals
   - going from node to node (update something or add something)

---
# Graph and Tree Traversals
---
 - when visiting every node, operations are O(n)
 - good benefits for searching and inserting
 - represents a lot of data
 - how does BFS and DFS work?

# Breadth First Search
---
 - start with the root node
 - move across the nodes from left to right
 - then down to the next level always move horizontally first
 - then down the the next level
 - uses additional memory
 - tracks every node and its children in order

# Depth First Search
---
 - start with the root node
 - follows one branch of the tree down as many nodes as possible
 - then find nearest ancestor with unexplored child
 - back up a level, over and down
 - lower memory requirement
 - don't need to store all the child nodes
 - down back up, over, down, up, over etc

# BFS VS DFS
---
| BFS                           | DFS                                         |
|-------------------------------|---------------------------------------------|
| PROS           | CONS         |   PROS           |   CONS                   |
|----------------|--------------|------------------|--------------------------|
| Shortest path  | more memory  | uses less memory | can get slow             |
| Closer nodes   |              |                  | not always shortest path |

if you have additional info on target node (ie if its likely in the upper few levels BFS is better)
otherwise - if its on a lower lever, maybe DFS is better!





















----
