# Graphs
---
 - useful & often used
 - set of values that are related in a pairwise fashion
 - many nodes / vertex
 - nodes are connected with edges
 - linked lists are a type of tree and trees are a type of graph

---
### Types of graphs
---
 - multiple different types of graphs
 - directed
  - has to move in a specific direction
 - undirected
  - can go back and forth
 - weighted
  - finds the shortest path
  - edges store weights
  - maps
 - unweighted
  - edges don't have values
 - the internet is a graph! whoa
 - cyclic / acyclic

---
### how to build a graph
 - Edge List
  - make a list of edges
  - use an array of arrays (connections)
``` javascript
  // edge list
  const graph = [[0,2],[2,3],[2,1],[1,3]]
  // adjacent list
  // can use objects instead of arrays
  // nodes names is the index
  const graph = [[2], [2,3], [0,1,3], [1,2]]
  // adjacent matrix
  const graph = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
  ]
```

### Pros and cons of graphs
---
 - Pros
  - good for relationships
 - Cons
  - scaling is hard
