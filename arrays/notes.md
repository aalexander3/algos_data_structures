# arrays
 - lists
 - not many rules
 - stored in contiguous memory
 - small footprint

# time
 - lookup O(1)
 - push O(1)
 - insert O(n)
 - delete O(n)

# good things to do with arrays
 - accessing
 - pushing

# less good (slower)
 - inserting
 - deleting

---

# Dynamic and Static Arrays
---
### static arrays are a fixed item size
 - space allocated is in adjacent blocks
 - static arrays limit the amount of space
 - can copy and rebuild the array with more memory
 - JS arrays work like dynamic arrays
 - always move and allocate
 - more control over memory in low level languages (C++)
 - probably won't have to worry about static arrays during interviews
 - push command is generally O(1) but could be O(1)


# JS Class
 - reference type
 - context
 - instantiation


## Reference type
 - classes / objects are pass by reference
 - references a specific object
 ``` js
  let obj1 = { value: 10 }
  let obj2 = obj1
 ```
 - obj1 and obj2 reference the same object
 - arrays are just objects

## Context
 - context vs scope
 - context says where we are within the object
 - `this`
 - what is the object environment that we're inside?
 - `this` is important for instantiation

## instantiation
 - making instances (multiple copies) of an object
 - class syntax (something i can make a copy of)

 ``` js

 class Player {
   constructor(name, type){
     this.name = name
     this.type = type
   }
   introduce(){
     console.log(`hello! I'm ${this.name}`)
   }
 }

 ```

















 <!--  -->
