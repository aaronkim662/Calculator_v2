export const operations = (operator = '', firstInput = '', secondInput = '') => {
  let num1 = parseFloat(firstInput)
  let num2 = parseFloat(secondInput)
  if(operator === '+'){
    return (num1 + num2).toString();

  }else if(operator === '-'){
    return (num1 - num2).toString();

  }else if(operator === '*'){
    return (num1 * num2).toString();

  }else if(operator === '/'){
    return (num1 / num2).toString();
  }
};