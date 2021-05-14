export const splitElements = (calcInput = '') => {
  let digits = '0123456789.';
  let newCalcInput = [];
  let start = 0;
  let digitStr = '';
  let splitInput = '';

  // check for spaces and compress the string
  if(calcInput.includes(' ')){
    splitInput = calcInput.split(' ').join('');
  }else{
    splitInput = calcInput;
  }

  for(let i = 0; i < splitInput.length; i++){
    // If the value of string is a stringed digit
    // Stack the values until it is not
    if(digits.includes(splitInput[i])){
      digitStr += splitInput[i];
    }else{
      // If the value is not then push the value
      // Also since we know its not a stringed digit it must either be a parenthesis or an operation
      newCalcInput.push(digitStr);
      newCalcInput.push(splitInput[i]);
      start = i;
      digitStr = '';
    }
  }
  // The previous loop will only push if the value is not a stringed digit
  // Push the remaining digits
  if(start + 1 < splitInput.length){
    newCalcInput.push(splitInput.substring(start + 1, splitInput.length))
  }

  // clear ''
  for(let i = 0; i < newCalcInput.length; i++){
    if(newCalcInput[i] === ''){
      newCalcInput.splice(i,1);
    }
  };
  return newCalcInput

};