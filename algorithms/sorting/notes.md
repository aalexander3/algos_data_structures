## Sorting
---
why is sorting important?
 - large inputs
 - small inputs don't matter too much
 - more expensive
 - sorting data means it is more meaningful
 - better results for a consumer
 - sorting and searching are huge CS problems in software!

---
## why not use built in .sort()??
---
 - built in sort methods might have particular implementations and may not work in the desired way
 - browsers have different JavaScript engines and might be implementing different ways of sorting
 - which means:
  - results are not always the same
  - time complexity can vary

## some algorithms being used
---
 - Radix Sort
 - Quick Sort
 - Heap Sort
 - Bubble Sort
 - Selection Sort
 - Insertion Sort
 - Merge Sort
 - Counting Sort

# elementary sorts
 - simple, basic sorting algorithms that are widely known
---

## Bubble Sort
---
how does bubble sort work?
 - bubble up the largest number with multiple pass throughs
 - looping over the list multiple times
 - not the most efficient
 - simple algorithm
 - comparing items in nested loops
 - time complexity O(n^2)
 - space complexity O(1)

## Selection Sort
---
how does selection sort work?
 - scans list of items for the smallest element
 - swaps the found item for the first position
 - multiple pass throughs and comparisons
 - time complexity O(n^2)
 - space complexity O(1)

## Insertion Sort
---
how does insertion sort work?
 - not the most efficient, but some extremely fast cases
 - if its already sorted or pretty close
 - picks out the spot where the value fits in
 - shifts the rest of the values to make room for the number being inserted
 - best case: O(n)
 - great for small data sets and nearly sorted data sets

## Merge Sort
---
can we do better than O(n^2)???
  - yes
  - O(n logn)
  - with merge sort and quick sort
  - divide and conquer technique
  - start in the middle and go from there
  - also recursive

how does merge sort work?
 - divide the list in half
 - divide lists in half again
 - and again
 - until we have one item in each sub list
 - compare the first two lists
 - order them
 - building sort of a reversed tree
 - order each list comparing the left side lists to the right side
 - stable - keeps original

## Quick Sort
---
| TIME COMPLEXITY                    | SPACE COMPLEXITY |
|------------------------------------|------------------|
| BEST       | AVERAGE      | WORST  |                  | 
|------------|--------------|--------|------------------|
| Ω(n log(n))| Θ(n log(n))  |	O(n^2) | Θ(log(n))        |

how does quick sort work?
 - divide and conquer algorithm
 - o(n logn)
 - uses a pivoting technique to break the main list into smaller lists
 - pick a random pivot
 - all numbers greater than that pivot go to the right
 - all numbers that are less than that pivot go to the left
 - how to pick the pivot point?
 - could always be the last item in the array
 - how to code it??
 - really really useful
 - one of the most used algorithms
 - really good space complexity! O(log n)
 - worst case


## Which sort is best?
---
When to use Insertion sort?
 - small inputs
 - items are mostly sorted

Bubble sort
 - never going to use
 - not very efficient

 Selection sort
  - not going to use
  - not very efficient

Merge Sort
 - fast sorting mech
 - commonly used
 - O(n logn)
 - worried about worst case scenarios?
 - external sorting
 - not great space complexity

Quick Sort
 - most popular
 - careful at picking pivots
 - not great if you're worried about worst case

Heap sort
 - also fast
 - good memory
 - doesn't take up extra space
 - is on average slower than quick sort

## Radix sort and counting sort
---
Bucket sort, counting sort, radix sort
 - non comparison sorting
 - only works with numbers in a restricted range
 - fixed length integers
































---
