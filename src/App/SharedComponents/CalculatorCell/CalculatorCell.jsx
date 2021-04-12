import React from 'react';

const CalculatorCell = (props) => {
  const [digit, setDigit] = React.useState({
    digit: props.digit
  });

  return (
    <div id = {'Cell_' + digit.digit} className = 'CalculatorCell'>
      {digit.digit}
    </div>
  )
}

export default CalculatorCell;