# Hash Tables
---
## Object, hash, map, dictionary... etc

 - Different names in different languages
 - Key, value pairs

## How does it work?
 - key used an index
 - performs lookup by the key
 - little shelves of memory that store key + value

## Hash generators / Hash Functions
 - MD5 or other hashing algorithms generate some random patterns
 - same input always has the same output
 - idempotent - a function given an input always outputs the same output
 - converts the hashed string into an index
 - every key runs through a hash box (optimized functions)
 - some hash functions are more complex and longer
 - keys get placed in different places in memory

## Hash Tables
---
Time complexities for hash tables
 - lookup O(1)
 - insert O(1)
 - delete O(1)
 - search O(1)

## main problems with hash tables
 - computer's limited space
 - collision (keys get stored in buckets and get stored in the same location in memory)
 - collision creates linked lists
 - collision brings hash time complexities up to O(n)

## created differently in different languages
 - but most of them have them
 - Map
 - Set
 - different JavaScript data types
 - Map maintains the order of key value pairs that get inserted
 - means that looping order is maintained


## why hash tables??
 - faster search, insert, lookup, delete
 - flexible keys
 - no concept of order, slow key iteration
 - fast access, but more memory
