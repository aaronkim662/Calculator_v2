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