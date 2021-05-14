export const formatParens = (calcInput = []) => {
  const parenthesis = [')', '(']
  for(let i = 0; i < calcInput.length; i++){
    if(calcInput[i] === parenthesis[0] && calcInput[i+1] === parenthesis[1]){
      calcInput.splice(i+ 1, 0, '*')
      i++
    // if there is a parenthesis and a number next to it in either order it is multiplication
    }else if(!isNaN(parseFloat(calcInput[i])) && calcInput[i+1] === parenthesis[1]){
      calcInput.splice(i+1, 0, '*')
    }else if(!isNaN(parseFloat(calcInput[i+1])) && calcInput[i] === parenthesis[0]){
      calcInput.splice(i+1, 0, '*')
    }
  }
  return calcInput
};