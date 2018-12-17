// Problem: create a function that reverses a string:
// "Hi my name is Arren" should read:
// "nerrA si eman ym iH"

function reverse(str){
  // check of the input
  // base cases are important!
  // split the string into an array
  // create a new array
  // loop over everything backwards and push values onto new array
  if(!str || str.length < 2 || typeof str === 'string'){
    return 'not good'
  } else {
    let backwardsArr = []
    for (let i = str.length-1; i >= 0; i--){
      backwardsArr.push(str[i])
    }
    return backwardsArr.join('')
  }
}

function reverse2(str){
  return str.split('').reverse().join('')
}

const reverse3 = () => [...str].reverse().join('')
