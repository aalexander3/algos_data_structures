function reverseString(str) {

  //iterative
  // hold a new string in a var
  // split the string
  // loop backwards adding each letter to the new str
  // iterative
  // let reversedString = []
  // let splitStrings = str.split('')
  // for(let i = splitStrings.length-1; i >= 0; i--) {
  //   reversedString.push(splitStrings[i])
  // }

  // return reversedString.join('')

  //recursive
  if (str === "") return ""
  return reverseString(str.substr(1)) + str.charAt(0)
}

reverseString('yoyo mastery')
