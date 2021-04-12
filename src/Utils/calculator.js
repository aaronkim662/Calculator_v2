const checkEdgeCases = (calcCheck = '') =>  {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const edgeCases = ['++', '+/', '/+', '+*', '*+', '-*', '-/', '**', '*/', '/*', '**', '//', '-+'];
  const operations = ['+', '/', '*'];
  // check for single parenthesis
  if(calcCheck.includes('(') && !calcCheck.includes(')')){
    return false
  }else if(!calcCheck.includes('(') && calcCheck.includes(')')){
    return false
  }
  // check for letter characters
  for(let i = 0; i < alphabet.length; i++){
    if(calcCheck.includes(alphabet[i])){
      i = alphabet.length - 1;
      return false;
    };
  };

  // check for irregular combinations of operations
  for(let i = 0; i < edgeCases.length; i++){
    if(calcCheck.includes(edgeCases[i])){
      return false;
    };
  };

  // check for operations at the start and end oof string
  // a negavtive string is acceptable only at the beginning
  for(let i = 0; i < operations.length; i++){
    if(calcCheck[calcCheck.length - 1] === '-' || calcCheck[0] === operations[i] || calcCheck[calcCheck.length -1] === operations[i]){
      return false;
    }
  }
  return true
}

const splitElements = (calcInput = '') => {
  let digits = '0123456789.';
  let newCalcInput = [];
  let start = 0;
  let digitStr = '';
  let splitInput = '';

  if(calcInput.includes(' ')){
    splitInput = calcInput.split(' ').join('');
  }else{
    splitInput = calcInput;
  }

  for(let i = 0; i < splitInput.length; i++){
    if(digits.includes(splitInput[i])){
      digitStr += splitInput[i];
    }else{
      newCalcInput.push(digitStr);
      newCalcInput.push(splitInput[i]);
      start = i;
      digitStr = '';
    }
  }
  // push remaining digits
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

}
