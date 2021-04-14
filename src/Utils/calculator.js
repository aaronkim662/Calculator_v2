// There are only two console logs in this file and they are meant for testing purposes.
// If these edge cases are met then return false, if not then return true
const checkEdgeCases = (calcCheck = '') =>  {
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
}

// checkEdgeCases('..5+2') // False
// checkEdgeCases('5+2 ** 7') // False

const checkMultipleDecimals = (calcInput = []) => {
  for(let i = 0; i < calcInput.length; i++){
    if(calcInput[i].split('.').length > 2){
      return false
    }
  }
  return true
}

// checkMultipleDecimals([ '1', '+', '2.5.2', '*', '30' ])

const checkSingleNumber = (calcInput = '') => {
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
}

// Split elements into an array
const splitElements = (calcInput = '') => {
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

}

// splitElements("(9/3)*2*5/10") // ['(', '9', '/', '3', ')', '*', '2','*', '5', '/', '10']

// Format
const formatParens = (calcInput = []) => {
  const parenthesis = [')', '(']
  for(let i = 0; i < calcInput.length; i++){
    if(calcInput[i] === parenthesis[0] && calcInput[i+1] === parenthesis[1]){
      calcInput.splice(i+ 1, 0, '*')
      i++
    }
  }
  return calcInput
}

// Format negative numbers by prepending them next to the following number
const formatNegative = (calcInput = []) => {
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

// In this function, pass in operation and numbers to solve
const operations = (operator = '', firstInput = '', secondInput = '') => {
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
}

// This function does pemdas
const pemdas = (calcArray = [], ) => {
  const typesOperations = ['*', '/', '+', '-'];
  // Check for '*' and '/' and pass it into operations
  // Then replace the two numbers and operation; insert the value
  if(calcArray.includes(typesOperations[0]) || calcArray.includes(typesOperations[1])){
    for(let i = 0; i < calcArray.length; i++){
      if(calcArray[i] === typesOperations[0]){
        let value = operations('*', calcArray[i - 1], calcArray[i +1]);
        calcArray.splice(i - 1, 3, value);
        i = 0;
      }else if(calcArray[i] === typesOperations[1]){
        let value = operations('/', calcArray[i - 1], calcArray[i +1]);
        calcArray.splice(i - 1, 3, value);
        i = 0;
      }

    }
  }

  // Check for '+' and '-' pass into operations
  if(calcArray.includes(typesOperations[2]) || calcArray.includes(typesOperations[3])){
    for(let i = 0; i < calcArray.length; i++){
      if(calcArray[i] === typesOperations[2]){
        let value = operations('+', calcArray[i - 1], calcArray[i +1]);
        calcArray.splice(i - 1, 3, value);
        i = 0;
      }else if(calcArray[i] === typesOperations[3]){
        let value = operations('-', calcArray[i - 1], calcArray[i +1]);
        calcArray.splice(i - 1, 3, value);
        i = 0;
      }

      if(!calcArray.includes(typesOperations[2]) && !calcArray.includes(typesOperations[3])){
        i = calcArray.length;
      }
    }
  }
  return calcArray[0];
};

// This method is for solving inner parenthesis wihtin parenthesis
// The way I was appraoching this part was to iterate and find ( , )
// Any numbers in between we push to a new array
// Until we hit ), we solve and insert it
// If there is a ( in between we reset the new array
// const innerParens = (calcInput = []) => {
//   let newCalcInput = calcInput
//   let startSearch = true;
//   let innerCalc = []
//   let
//   console.log('inner', calcInput)
//   for(let rightBracket = 0; rightBracket < calcInput.length; rightBracket++){
//     if(calcInput[rightBracket] === '('){
//       innerCalc.push(calcInput[rightBracket])
//     }
//     for(let leftBracket = 1; leftBracket < calcInput.length; leftBracket++){
//       if(calcInput[i] === '('){
//         innerCalc = []
//       }else if(calcInput[i] === ')'){
//         innerCalc.push(calcInput[i])

//       }
//     }
//   }
// }

const calculator = (input = '') => {
  if(input === ''){
    return '';
  }
  const parenthesis = ['(', ')'];
  let invalidInput = checkEdgeCases(input);
  let newInput = [];
  let calculation = 0;
  let startParens = true;

  // check for edge cases first
  if(!invalidInput){
    // console.log('Syntax Error')
    return 'Syntax Error'
  }

  if(checkSingleNumber(input)){
    return input
  }
  // replace double negatives with a +
  let format = input.replace(/--/g, '+');
  // split elements into an array
  newInput = splitElements(format);
  // format the negative numbers
  newInput = formatNegative(newInput);
  // format the parenthesis
  newInput = formatParens(newInput);

  if(!checkMultipleDecimals(newInput)) {
    return 'Syntax Error'
  }

  // do calculations within parenthesis first
  while(startParens){
    if(newInput.includes(parenthesis[0]) && newInput.includes(parenthesis[1])){
      let firstBracketIdx = newInput.indexOf('(');
      let secondBracketIdx = newInput.indexOf(')');
      let innerValue = newInput.slice(firstBracketIdx + 1, secondBracketIdx);
      let innerCalc = pemdas(innerValue);
      newInput.splice(firstBracketIdx, secondBracketIdx + 1, innerCalc);
    }else{
      startParens = false;
    }
  }

  // do remaining calculations
  calculation = pemdas(newInput);
  // console.log(calculation);
  return calculation;
}

// comment/uncomment out below to test
// calculator('(10-5)')
// calculator("1 + 2.5 * 30") // 76
// calculator("1 + 34.2 / 2") // 18.1
// calculator("(4-2)*3.5 * (10 - 5)") // 35
// calculator("4*5/2") // 10
// calculator("-.32       /.5") // 0.64
// calculator("9/3*2*5/10") // 3
// calculator('(9+3)(-10*2)') // 240
// calculator("-5+-8--11*2") // 9
// calculator("2+-+-4") //Invalid or Syntax Error
// calculator("19 + cinnamon") //Invalid or Syntax Error

// comment out code below to run this as its own
// Currently this app does not handle mutliple parenthesis within parenthesis
//
export default calculator;