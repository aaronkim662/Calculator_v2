export const formatNegative = (calcInput = []) => {
  for(let i = 0; i < calcInput.length; i++){
    // check if the first value is a negative and the next value is a number
    if(calcInput[i] === '-' && (!isNaN(parseInt(calcInput[i+1])) || !isNaN(parseFloat(calcInput[i+1]))) && typeof parseInt(calcInput[i+1]) === 'number'){
      calcInput.splice(i, 2, `-${calcInput[i+1]}`)
    }
  }

  // Insert a '+' if there is a number and the next value is a negative number
  for(let i = 0; i < calcInput.length; i++){
    if(typeof parseInt(calcInput[i]) === 'number' && Math.sign(parseInt(calcInput[i+1])) === -1 && !isNaN(parseInt(calcInput[i]))){
      calcInput.splice(i+1, 0, '+')
      i++
    }
  }

  return calcInput
}