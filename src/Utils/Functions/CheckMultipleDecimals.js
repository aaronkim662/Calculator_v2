export const checkMultipleDecimals = (calcInput = []) => {
  for(let i = 0; i < calcInput.length; i++){
    if(calcInput[i].split('.').length > 2){
      return false
    }
  }
  return true
};