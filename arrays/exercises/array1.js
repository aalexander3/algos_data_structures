const strings= ['a', 'b', 'c', 'd']; // 4 shelves to store a letter * 4 times 16 bytes to store
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push - O(1) operation
strings.push('e');

//pop not looping through anything - O(1) operation
// like a lookup (go to this index and remove it)
strings.pop();
strings.pop();

//unshift - O(n) operation
// has to move the indices of all the other items in that array to realign

strings.unshift('x')

//splice - O(n) - had to move all the items after the starting index
strings.splice(2, 0, 'alien');

console.log(strings)
