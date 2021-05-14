export const checkEdgeCases = (calcCheck = '') =>  {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const edgeCases = ['++', '+/', '/+', '+*', '*+', '-*', '-/', '**', '*/', '/*', '**', '//', '-+', '..', '()'];
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

  // check for operations at the start and end of string
  // a negavtive string is acceptable only at the beginning
  for(let i = 0; i < operations.length; i++){
    if(calcCheck[calcCheck.length - 1] === '-' || calcCheck[0] === operations[i] || calcCheck[calcCheck.length -1] === operations[i]){
      return false;
    }
  }
  return true
};