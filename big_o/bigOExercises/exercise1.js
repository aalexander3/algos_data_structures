// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1) - assignment (sometimes doesn't count toward big o)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n) - loop
    anotherFunction(); // O(n) - happens every time the loop runs
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1) - return statement runs one time
}

// my answer: O(3n)
// right answer O(4n + 3)
// performs three operations for every input
