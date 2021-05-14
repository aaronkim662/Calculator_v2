import { operations } from "./Operations";

export const pemdas = (calcArray = [], ) => {
  const typesOperations = ['*', '/', '+', '-'];
  // Check for '*' and '/' and pass it into operations
  // Then replace the two numbers and operation; insert the value
  if(calcArray.includes(typesOperations[0]) || calcArray.includes(typesOperations[1])){
    for(let i = 0; i < calcArray.length; i++){
      if(calcArray[i] === typesOperations[0]){
        let value = operations('*', calcArray[i - 1], calcArray[i + 1]);
        calcArray.splice(i - 1, 3, value);
        i = 0;
      }else if(calcArray[i] === typesOperations[1]){
        let value = operations('/', calcArray[i - 1], calcArray[i + 1]);
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