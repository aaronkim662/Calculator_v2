import { checkEdgeCases } from "./Functions/CheckEdgeCases"
import { checkMultipleDecimals } from "./Functions/CheckMultipleDecimals";
import { checkSingleNumber } from "./Functions/CheckSingleNumber";
import { splitElements } from "./Functions/SplitElements";
import { formatNegative } from "./Functions/FormatNegative";
import { formatParens } from "./Functions/FormatParens";
import { pemdas } from "./Functions/Pemdas";

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

  calculation = pemdas(newInput);
  return calculation;
}

export default calculator;