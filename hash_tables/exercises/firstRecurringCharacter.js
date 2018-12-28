// first recurring character
// given an array = [2,5,1,2,3,3,5,1,2,4]
// should return 2
// aka the first recurring character

// if no character is recurring it returns undefined

// store previously seen values as keys on an Object
// find the item that has previously been stored

const firstRecurringCharacter = (array) => {
  if (array.length === 0) return undefined
  const previousChars = {}
  return array.find(item => {
    if (previousChars[item]) {
      return true
    } else {
      previousChars[item] = item;
      return false
    }
  })
}
