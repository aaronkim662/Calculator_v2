export const checkSingleNumber = (calcInput = '') => {
  const splitInput = calcInput.split('');
  let singleNumber = 0
  for(let i = 0; i < calcInput.length; i++){
    if(typeof parseFloat(calcInput[i]) === 'number' && !isNaN(parseFloat(calcInput[i]))){
      singleNumber = splitInput.join('')
    }else{
      return false
    }
  }
  return singleNumber
};